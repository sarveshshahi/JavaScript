// const user=""
// if(user){
//     console.log(user)
// }
// else{
//     console.log("user not present")
// }

// const obj = {};
// if (Object.keys(obj).length === 0) {  ////Object.key(obj) give all value in array 
//     console.log("obj is empty");
// } else {
//     console.log("obj is not empty");
// }

///nulish coalescing operator  (??):

let val1;
val1=5??10
val2=null??10
val3=undefined??17
val4=""??67
console.log(val1)
console.log(val2)
console.log(val3)
console.log(val4)

vaspl_repair_management.service_work_order = {
    set_custom_buttons: function(frm, doc) {
        // ... existing code ...
    },

    prompt_for_individual_qty: function(frm) {
        // Define the child table structure
        let fields = [
            {
                fieldtype: 'Table',
                label: __('Production Items'),
                fieldname: 'production_items',
                fields: [
                    {
                        fieldtype: 'Data',
                        label: __('Item Code'),
                        fieldname: 'item_code',
                        read_only: 1,
                        in_list_view: 1
                    },
                    {
                        fieldtype: 'Float',
                        label: __('Pending Qty'),
                        fieldname: 'pending_qty',
                        read_only: 1,
                        in_list_view: 1
                    },
                    {
                        fieldtype: 'Float',
                        label: __('Qty to Produce'),
                        fieldname: 'qty_to_produce',
                        in_list_view: 1
                    }
                ],
                data: frm.doc.production_items.map(item => ({
                    item_code: item.item_code,
                    pending_qty: item.pending_qty,
                    qty_to_produce: item.pending_qty
                })),
                get_data: () => {
                    return frm.doc.production_items;
                }
            }
        ];

        frappe.prompt(fields, data => {
            // Extract the quantities from the table data
            let quantities = {};
            data.production_items.forEach(item => {
                quantities[item.item_code] = item.qty_to_produce;
            });
            vaspl_repair_management.service_work_order.create_stock_entry(frm, quantities);
        }, __('Enter Quantities'), __('Create'));
    },

    create_stock_entry: function(frm, data) {
        let items = frm.doc.production_items.map(item => {
            return {
                item_code: item.item_code,
                qty: data[item.item_code],
                warehouse: frm.doc.fg_warehouse
            };
        });

        console.log("Items to send:", items);  // Debugging line

        frappe.call({
            method: 'vaspl_repair_management.repair_management.doctype.service_work_order.service_work_order.make_stock_entry',
            args: {
                work_order_id: frm.doc.name,
                purpose: 'Manufacture',
                qty: items
            },
            callback: function(r) {
                if (r.message) {
                    frappe.model.sync(r.message);
                    frappe.set_route('Form', r.message.doctype, r.message.name);
                }
            }
        });
    },

    // ... other functions ...
};
