/* document.body.children[1].children[0].href = "https://google.com"; */

let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://instagram.com/melza.moment";

anchorElement = document.querySelector("p a"); //or querySelectorAll to target all
anchorElement.href = "https://google.com";
