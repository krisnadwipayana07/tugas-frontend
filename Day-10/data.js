let fullName = document.getElementById("fullName");
let email = document.getElementById("email");
let phoneNumber = document.getElementById("phoneNumber");
let nationality = document.getElementById("nationality");
let message = document.getElementById("message");

fullName.innerHTML = localStorage.getItem("fullName");
email.innerHTML = localStorage.getItem("email");
phoneNumber.innerHTML = localStorage.getItem("phoneNumber");
nationality.innerHTML = localStorage.getItem("nationality");
message.innerHTML = localStorage.getItem("message");
