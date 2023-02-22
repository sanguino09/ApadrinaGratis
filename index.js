function validate() {
  if (document.getElementById("remember").checked) {
    console.log("checked");
    document.getElementById("apadrinaLink").setAttribute("href","./index.html");
    document.getElementById("blogLink").setAttribute("href","#");
    document.getElementById("contactLink").setAttribute("href","./contact.html");
    document.getElementById("policyLink").setAttribute("href","#");
  } else {
    console.log("check me out");
    document.getElementById("apadrinaLink").setAttribute("href","#");
    document.getElementById("blogLink").setAttribute("href","#");
    document.getElementById("contactLink").setAttribute("href","#");
    document.getElementById("policyLink").setAttribute("href","#");
  }
}
