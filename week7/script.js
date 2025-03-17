// function validateForm() {
//     //getting the values
//     let username = document.getElementById("username").value.trim();
//     let email = document.getElementById("email").value.trim();
//     let password = document.getElementById("password").value.trim();

//     //get error messages
//     let userNameError = document.getElementById("userNameError");
//     let emailError = document.getElementById("emailError");
//     let passwordError = document.getElementById("passwordError");

//     //clear errors
//     userNameError.innerHTML="";
//     emailError.innerHTML="";
//     passwordError.innerHTML="";


// let isValid = true;
// if(username=="") {
//     userNameError.innerHTML="Username is required";
//     isValid=false;
// }

// let emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
// if(email=="") {
//     emailError.innerHTML="Email is required";
// } else if(!email.match(emailPattern)){
//     emailError.innerHTML="invalid email format";
//     isValid=false;
// }

// if(password=="") {
//     passwordError.innerHTML="Password is required";
//     isValid=false;
// } else if(password.length<6) {
//     passwordError.innerHTML="Password needs to be 6 or more characters";
//     isValid=false
// }

// return isValid;
// }