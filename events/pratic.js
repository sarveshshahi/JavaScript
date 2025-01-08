let validationTimeouts = {};

const style = document.createElement('style');
style.innerHTML = `
  .error {
      border: 2px solid red !important;
  }
`;
document.head.appendChild(style);

frappe.ui.form.on('Registration', {
    se_mobile: function (frm) {
        const requiredLength = 10; // Required length of the mobile number

        // First, validate the mobile number
        if (!frm.doc.se_mobile || frm.doc.se_mobile.length !== requiredLength || !/^\d+$/.test(frm.doc.se_mobile)) {
            setTimeout(function() {
                frappe.msgprint(__('Please enter a valid 10-digit mobile number.'));
            }, 4000); 
            return; 
        }

        // Proceed to check if the salesman is registered
        frappe.call({
            method: "frappe.client.get_list",
            args: {
                doctype: "Salesman Master",
                filters: {
                    "name": frm.doc.se_mobile, 
                },
                fields: ["name", "salesman_name"] 
            },
            callback: function (r) {
                setTimeout(function() {
                    if (r.message && r.message.length === 0) {
                        // Show a pop-up dialog when not registered
                        frappe.msgprint({
                            title: __('Not Registered'),
                            message: __('You are not a registered salesman. To register, click OK.'),
                            primary_action: {
                                label: __('OK'),
                                action: function () {
                                    // Call backend method to send the registration form
                                    frm.call({
                                        method: "msg", // Replace with your actual backend method
                                        args: {
                                            token: frm.doc.token || "", // Ensure token is provided
                                            number: frm.doc.se_mobile,  // Use se_mobile as the recipient number
                                            message_url: "https://ib.mozility.com/salesman-registration/new" // Registration URL
                                        },
                                        callback: function (response) {
                                            frappe.msgprint(__('Registration form has been sent to your WhatsApp.'));
                                        }
                                    });
                                }
                            }
                        });
                    } else if (r.message && r.message.length > 0) {
                        // Salesman exists
                        frm.set_value("se_name", r.message[0].salesman_name);
                    } else {
                        // Unexpected response
                        console.error("Unexpected response:", r);
                    }
                }, 1000); // 1000 milliseconds = 1 second
            }
        });
    },

    send_otp: function (frm) {
        if (!frm.doc.contact_number) {
            frappe.msgprint("Please enter a mobile number before sending OTP.");
            return;
        }
        if (frm.doc.contact_number) {
            validate_primary_and_alternative_number(frm, frm.doc.contact_number);
        }

        // Disable the button and start the countdown
        frm.fields_dict.send_otp.$input.prop('disabled', true);
        let countdown = 20; // 60 seconds countdown

        const interval = setInterval(function () {
            if (countdown > 0) {
                frm.fields_dict.send_otp.$input.text(`Resend OTP in ${countdown--}s`);
            } else {
                clearInterval(interval);
                frm.fields_dict.send_otp.$input.prop('disabled', false);
                frm.fields_dict.send_otp.$input.text('Resend OTP');
            }
        }, 1000); // Update every second

        frm.call({
            method: "send_otp",
            args: {
                mobile_number: frm.doc.contact_number,
            },
            callback: function (response) {
                frm.set_value("otp", response.message);
                // frappe.msgprint("OTP has been sent to your mobile number.");

                // Set a timeout to clear the OTP field after 1 minute if not verified
                frm.otp_timeout_id = setTimeout(function () {
                    frm.set_value("otp", "");
                    frappe.msgprint("OTP has expired and has been cleared.");
                }, 20000); // 60000 milliseconds = 1 minute
            }
        });

        // Store the interval ID in the form for later use
        frm.interval_id = interval;
    },

    alternative_opt: function (frm) {
        if (!frm.doc.alternative_number) {
            frappe.msgprint("Please enter an alternative mobile number before sending OTP.");
            return;
        }
        if (frm.doc.alternative_number) {
            validate_primary_and_alternative_number(frm, frm.doc.alternative_number);
        }

        // Disable the button and start the countdown
        frm.fields_dict.alternative_opt.$input.prop('disabled', true);
        let countdown = 20; // 60 seconds countdown

        const interval = setInterval(function () {
            if (countdown > 0) {
                frm.fields_dict.alternative_opt.$input.text(`Resend OTP in ${countdown--}s`);
            } else {
                clearInterval(interval);
                frm.fields_dict.alternative_opt.$input.prop('disabled', false);
                frm.fields_dict.alternative_opt.$input.text('Resend OTP');
            }
        }, 1000); // Update every second

        frm.call({
            method: "send_otp",
            args: {
                mobile_number: frm.doc.alternative_number,
            },
            callback: function (response) {
                frm.set_value("alt_otp", response.message);
                frappe.msgprint("OTP has been sent to your alternative mobile number.");

                // Set a timeout to clear the OTP field after 1 minute if not verified
                frm.alt_otp_timeout_id = setTimeout(function () {
                    frm.set_value("alt_otp", "");
                    frappe.msgprint("OTP has expired and has been cleared.");
                }, 20000); // 60000 milliseconds = 1 minute
            }
        });

        // Store the interval ID in the form for later use
        frm.alt_interval_id = interval;
    },

    verify: function (frm) {
        if (verify_otp(frm)) {
            // Stop the countdown
            clearInterval(frm.interval_id);

            // Clear the OTP timeout to prevent clearing the OTP field
            clearTimeout(frm.otp_timeout_id);

            // Replace countdown text with verification message
            frm.fields_dict.send_otp.$input.text('Your OTP is verified.');

            // Notify the user
            frappe.msgprint("Your OTP is verified.");
        } else {
            frappe.validated = false; // Prevent save if triggered via verify
        }
    },

    verify_alt_otp: function (frm) {
        if (verify_alt_otp(frm)) {
            // Stop the countdown
            clearInterval(frm.alt_interval_id);

            // Clear the OTP timeout to prevent clearing the OTP field
            clearTimeout(frm.alt_otp_timeout_id);

            // Replace countdown text with verification message
            frm.fields_dict.alternative_opt.$input.text('Your OTP is verified.');

            // Notify the user
            frappe.msgprint("Your OTP is verified.");
        } else {
            frappe.validated = false; // Prevent save if triggered via verify
        }
    },

    validate: function (frm) {
        if (!verify_otp(frm)) {
            frappe.validated = false; // Prevent save on form validation
        }
        if (!validate_customer_name(frm)) {
            frappe.validated = false; // Prevent save if customer name validation fails
        }
    },

    before_save: function (frm) {
        if (!verify_otp(frm)) {
            frappe.validated = false; // Prevent save if OTP is not verified
        }
        if (frm.doc.alternative_number) {
            validate_primary_and_alternative_number(frm, frm.doc.alternative_number);
            if (!frm.doc.alt_otp || !verify_alt_otp(frm)) {
                frappe.msgprint("Please verify the OTP sent to your alternative number before saving.");
                frappe.validated = false; // Prevent save if alternative OTP is not verified
            }
        }
        
        if (frm.doc.phone_imei) {
            validate_imei_number(frm);
        }
    },

    product_purchased: function(frm){
        if(frm.doc.product_purchased){
            set_warranty_date(frm);
        }
    },

    customer_name: function(frm) {
        debounce(validate_customer_name, 1000)(frm);
    }
});

function verify_otp(frm) {
    if (frm.doc.otp_verified && frm.doc.otp) {
        if (frm.doc.otp_verified === frm.doc.otp) {
            return true; // OTP is valid
        } else {
            frappe.msgprint("Invalid OTP. Please try again.");
            return false; // OTP is invalid
        }
    } else {
        frappe.msgprint("OTP has expired. Please request a new OTP.");
        return false; // OTP has expired or not set
    }
}

function verify_alt_otp(frm) {
    if (frm.doc.verify_alt_otp && frm.doc.alt_otp) {
        if (frm.doc.verify_alt_otp === frm.doc.alt_otp) {
            return true; // OTP is valid
        } else {
            frappe.msgprint("Invalid OTP. Please try again.");
            return false; // OTP is invalid
        }
    } else {
        frappe.msgprint("OTP has expired. Please request a new OTP.");
        return false; // OTP has expired or not set
    }
}

function set_warranty_date(frm) {
    if (frm.doc.product_purchased) {
        frappe.call({
            method: "frappe.client.get_list",
            args: {
                doctype: "Rhinotech Sku Master",
                filters: {
                    "name": frm.doc.product_purchased, // Match the field with the doctype
                },
                fields: ["validity_period"] // Fetch only the required field(s)
            },
            callback: function (r) {
                if (r.message && r.message.length > 0) {
                    // Get validity period in days
                    var validity_period_str = r.message[0].validity_period;

                    var validity_period = parseInt(validity_period_str.split(' ')[0]);

                    // Calculate warranty end date by adding validity period in days
                    var warranty_date = frappe.datetime.add_days(frappe.datetime.get_today(), validity_period);
                    
                    // Set the warranty date in the form (adjust field name as per your use case)
                    frm.set_value('warranty_till', warranty_date);
                } 
            }
        });
    }
}

function validate_imei_number (frm){
    if(frm.doc.phone_imei.length !== 17){
        frappe.throw(__("Please enter the valid IMEI number"))
        return false;
    }
}

function validate_primary_and_alternative_number(frm, number) {
    const requiredLength = 10;
    // Validate the number
    if (!/^\d+$/.test(number) || number.length !== requiredLength) {
        frappe.throw(__(`Please enter a valid 10-digit mobile number containing only numbers for ${number}.`));
        return false;
    }
}

function validate_customer_name(frm) {
    const customerName = frm.doc.customer_name;
    const regex = /^[A-Za-z\s]+$/;

    if (!regex.test(customerName)) {
        frappe.msgprint(__('Please enter a valid customer name containing only alphabets.'));
        frm.fields_dict.customer_name.$wrapper.find('input').addClass('error');
        return false;
    } else {
        frm.fields_dict.customer_name.$wrapper.find('input').removeClass('error');
        return true;
    }
}

function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}