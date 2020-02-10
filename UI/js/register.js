const register_form = document.getElementById("registerform");

register_form.addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = new FormData(this);

  let name = document.getElementById("name").value;
  let surname = document.getElementById("surname").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let conf_password = document.getElementById("conf-password").value;
  let dob = document.getElementById("DOB").value;
  let hobbies = document.getElementById("hobbies").value;
  let username = document.getElementById("username").value;

  if (password != conf_password) {
    conf_password.setCustomValidity("Password Doesn't Match");
  }

  formData.append("name", name);
  formData.append("surname", surname);
  formData.append("username", username);
  formData.append("password", password);
  formData.append("email", email);
  formData.append("DOB", dob);
  formData.append("hobbies", hobbies);

  fetch("http://192.168.36.45:5000/register", {
    method: "post",
    mode: "cors",
    body: formData
  })
    .then(function(text) {
      return text.json();
    })
    .then(function(myJson) {
      console.log(myJson);
      if (myJson["status"] == "OK") {
        location.href = "./login.html";
      }
    })
    .catch(function(error) {
      console.error(error);
    });
});
