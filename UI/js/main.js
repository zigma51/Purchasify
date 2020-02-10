function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
let username = getCookie("username");
fetch("http://192.168.36.45:5000/home?username=" + username, {
  method: "get"
})
  .then(function(text) {
    console.log("passedone block");
    return text.json();
  })
  .then(function(myjson) {
    document.getElementById("title1").innerHTML = myjson["title1"];
    document.getElementById("title2").innerHTML = myjson["title2"];
    document.getElementById("section1img1").src =
      myjson["section1"][0]["imUrl"];
    document.getElementById("section1img2").src =
      myjson["section1"][1]["imUrl"];
    document.getElementById("section1img3").src =
      myjson["section1"][2]["imUrl"];
    document.getElementById("section1img4").src =
      myjson["section1"][3]["imUrl"];
    document.getElementById("section2img1").src =
      myjson["section2"][0]["imUrl"];
    document.getElementById("section2img2").src =
      myjson["section2"][1]["imUrl"];
    document.getElementById("section2img3").src =
      myjson["section2"][2]["imUrl"];
    document.getElementById("section2img4").src =
      myjson["section2"][3]["imUrl"];

    document.getElementById("section1title1").innerHTML =
      myjson["section1"][0]["title"];
    document.getElementById("section1title1").href =
      "./product.html?id=" +
      myjson["section1"][0]["asin"] +
      "&username=" +
      username;
    document.getElementById("section1title2").innerHTML =
      myjson["section1"][1]["title"];
    document.getElementById("section1title2").href =
      "./product.html?id=" +
      myjson["section1"][1]["asin"] +
      "&username=" +
      username;
    document.getElementById("section1title3").innerHTML =
      myjson["section1"][2]["title"];
    document.getElementById("section1title3").href =
      "./product.html?id=" +
      myjson["section1"][2]["asin"] +
      "&username=" +
      username;
    document.getElementById("section1title4").innerHTML =
      myjson["section1"][3]["title"];
    document.getElementById("section1title4").href =
      "./product.html?id=" +
      myjson["section1"][3]["asin"] +
      "&username=" +
      username;

    document.getElementById("section2title1").innerHTML =
      myjson["section2"][0]["title"];
    document.getElementById("section2title1").href =
      "./product.html?id=" +
      myjson["section2"][0]["asin"] +
      "&username=" +
      username;
    document.getElementById("section2title2").innerHTML =
      myjson["section2"][1]["title"];
    document.getElementById("section2title2").href =
      "./product.html?id=" +
      myjson["section2"][1]["asin"] +
      "&username=" +
      username;
    document.getElementById("section2title3").innerHTML =
      myjson["section2"][2]["title"];
    document.getElementById("section2title3").href =
      "./product.html?id=" +
      myjson["section2"][2]["asin"] +
      "&username=" +
      username;
    document.getElementById("section2title4").innerHTML =
      myjson["section2"][3]["title"];
    document.getElementById("section2title4").href =
      "./product.html?id=" +
      myjson["section2"][3]["asin"] +
      "&username=" +
      username;
  })
  .catch(function(error) {
    console.error(error);
  });
