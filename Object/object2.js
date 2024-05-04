// const tinderUser=new Object() ////single tone object
const tinder={}
tinder.id="12345"
tinder.name="aman"
tinder.isLogin=false
console.log(tinder);


const regularuser={
    email:"sarveshshahi@gmail.com",
    fullname:{
        userName:{
        firstname:"hitesh",
        lastname:"shahi"
        }
    }
}

// console.log(regularuser.email)
// console.log(regularuser.fullname.lastname) 
// console.log(regularuser.fullname)
console.log(regularuser.fullname?.userName.firstname)