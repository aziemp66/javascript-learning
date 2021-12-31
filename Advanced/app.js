//Selecting Elements

/* document.body.children[1].children[0].href = "https://google.com"; */

let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://instagram.com/melza.moment";

anchorElement = document.querySelector("p a"); //or querySelectorAll to target all
anchorElement.href = "https://google.com";

//Creating new HTML Element
let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://facebook.com";
newAnchorElement.textContent = "This leads to Facebook";

let firstParagraph = document.querySelector("p");
firstParagraph.append(newAnchorElement);

//Deleting HTML Element
let firstH1element = document.querySelector("h1");
firstH1element.remove();

//Move HTML Elements
firstParagraph.parentElement.append(firstParagraph);

//InnerHTML
console.log(firstParagraph.innerHTML);

firstParagraph.innerHTML = "Hi this is <strong>Azie</strong>!";
