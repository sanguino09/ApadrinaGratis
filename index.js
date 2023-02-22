
function validate() {
  if (document.getElementById("remember").checked) {
    console.log("checked");
    document
      .getElementById("apadrinaLink")
      .setAttribute("href", "./index.html");
    document.getElementById("apadrinaLink").removeAttribute("hidden", "");
    document.getElementById("blogLink").setAttribute("href", "#");
    document.getElementById("blogLink").removeAttribute("hidden", "");
    document
      .getElementById("contactLink")
      .setAttribute("href", "./contact.html");
    document.getElementById("contactLink").removeAttribute("hidden", "");
    document.getElementById("policyLink").setAttribute("href", "#");
    document.getElementById("policyLink").removeAttribute("hidden", "");
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
  }
}
function hideMenu(){
    document.getElementById("apadrinaLink").setAttribute("hidden", "");
    document.getElementById("blogLink").setAttribute("hidden", "");
    document.getElementById("contactLink").setAttribute("hidden", "");
    document.getElementById("policyLink").setAttribute("hidden", "");
}
