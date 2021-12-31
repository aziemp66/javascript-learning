/* document.body.children[1].children[0].href = "https://google.com"; */

let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://instagram.com/melza.moment";

anchorElement = document.querySelector("p a"); //or querySelectorAll to target all
anchorElement.href = "https://google.com";

let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://facebook.com";
newAnchorElement.textContent = "This leads to Facebook";

let firstParagraph = document.querySelector("p");

firstParagraph.append(newAnchorElement);
