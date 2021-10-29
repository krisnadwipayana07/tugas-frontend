function onSubmit() {
  let mainForm = document.forms["main-form"];
  let pass = mainForm["password"].value;
  let confPass = mainForm["confirmpassword"].value;
  let email = mainForm["email"].value;
  let confEmail = mainForm["confirmemail"].value;

  if (mainForm["username"].value == "") {
    alert("username kosong");
  } else if (pass == "") {
    alert("password kosong");
  } else if (confPass == "") {
    alert("confirm password kosong");
  } else if (email == "") {
    alert("email kosong");
  } else if (confEmail == "") {
    alert("confirm email kosong");
  }

  if (pass == confPass) {
    alert("password tidak sama");
  }
  if (email == confEmail) {
    alert("email tidak sama");
  }
}
