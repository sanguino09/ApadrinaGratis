function validate() {
  if (document.getElementById("remember").checked) {
    console.log("checked");
    document
      .getElementById("apadrinaLink")
      .setAttribute("href", "./index.html");
    document.getElementById("apadrinaLink").removeAttribute("hidden", "");
    document.getElementById("blogLink").setAttribute("href", "./blog.html");
    document.getElementById("blogLink").removeAttribute("hidden", "");
    document
      .getElementById("contactLink")
      .setAttribute("href", "./contact.html");
    document.getElementById("contactLink").removeAttribute("hidden", "");
    document.getElementById("policyLink").setAttribute("href", "./policy.html");
    document.getElementById("policyLink").removeAttribute("hidden", "");
    document.getElementById("termsLink").setAttribute("href", "./terms.html");
    document.getElementById("termsLink").removeAttribute("hidden", "");
  } else {
    console.log("check me out");
    document.getElementById("apadrinaLink").setAttribute("href", "#");
    document.getElementById("apadrinaLink").setAttribute("hidden", "");
    document.getElementById("blogLink").setAttribute("href", "#");
    document.getElementById("blogLink").setAttribute("hidden", "");
    document.getElementById("contactLink").setAttribute("href", "#");
    document.getElementById("contactLink").setAttribute("hidden", "");
    document.getElementById("policyLink").setAttribute("href", "#");
    document.getElementById("policyLink").setAttribute("hidden", "");
    document.getElementById("termsLink").setAttribute("href", "#");
    document.getElementById("termsLink").setAttribute("hidden", "");
  }
}
function hideMenu() {
  document.getElementById("apadrinaLink").setAttribute("hidden", "");
  document.getElementById("blogLink").setAttribute("hidden", "");
  document.getElementById("contactLink").setAttribute("hidden", "");
  document.getElementById("policyLink").setAttribute("hidden", "");
  document.getElementById("termsLink").setAttribute("hidden", "");
}

let img = true;
function imgSwitch() {
  console.log("hola");
  if (img == true) {
    document.getElementById("images").setAttribute("style", "background-color:#232323");
    document.getElementById("imgIcon").setAttribute("style", "color:#7d7d7d");
    document.getElementById("video").setAttribute("style", "background-color:white");
    document.getElementById("vidIcon").setAttribute("style", "color:white;margin-left:30vw;");
    img = false;
  } else {
    document.getElementById("images").setAttribute("style", "background-color:white");
    document.getElementById("imgIcon").setAttribute("style", "color:white");
    document.getElementById("video").setAttribute("style", "background-color:#232323");
    document.getElementById("vidIcon").setAttribute("style", "color:#7d7d7d;margin-left:30vw;");
    img = true;
  }
}
