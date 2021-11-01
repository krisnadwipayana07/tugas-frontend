// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".need-validate");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

function getData() {
  //get all values
  let fullName = document.getElementById("fullName").value;
  let email = document.getElementById("email").value;
  let phoneNumber = document.getElementById("phoneNumber").value;
  let nationality = document.getElementById("nationality").value;
  let message = document.getElementById("message").value;

  console.log(message);
  localStorage.setItem("fullName", fullName);
  localStorage.setItem("email", email);
  localStorage.setItem("phoneNumber", phoneNumber);
  localStorage.setItem("nationality", nationality);
  localStorage.setItem("message", message);
}
