const login_form = document.getElementById("loginform");

login_form.addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = new FormData(this);

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  formData.append("username", username);
  formData.append("password", password);

  fetch("http://192.168.36.45:5000/login", {
    method: "post",
    mode: "cors",
    body: formData
  })
    .then(function(text) {
      console.log("error inside text");
      return text.json();
    })
    .then(function(myJson) {
      console.log(myJson);
      if (myJson["status"] == "OK") {
        location.href = "./index.html";
        document.cookie = "username=" + username;
      } else if (myJson["status"] != "OK") {
        alert("Incorrect Password.");
      }
    })
    .catch(function(error) {
      console.error(error);
    });
});
