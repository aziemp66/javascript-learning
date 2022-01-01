// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"
//    - Select the second button by using an "id"

const destroyButton = document.querySelector("button");
const blueButton = document.getElementById("blue-button");

// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored
//    - Output the second button WITHOUT using the variable in which it's stored

function destroyFunction() {
    console.dir(destroyButton);
}
destroyButton.addEventListener("click", destroyFunction);

function blueFunction(event) {
    console.dir(event.target);
}

blueButton.addEventListener("click", blueFunction);

// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!

const blueParagraphs = document.body.children[2].children[1];
const destroyParagraphs = document.body.children[2].children[3];

// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)
//    - The second button changes the background color of the first paragraph to blue
/* function destroyFunction() {
    destroyParagraphs.remove();
}
destroyButton.addEventListener("click", destroyFunction);

function blueFunction() {
    blueParagraphs.style.backgroundColor = "rgb(4, 113, 191)";
}
blueButton.addEventListener("click", blueFunction); */
// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!
function destroyFunction() {
    destroyParagraphs.className = "destroy";
}
destroyButton.addEventListener("click", destroyFunction);

function blueFunction() {
    blueParagraphs.classList.add("blue");
    blueParagraphs.className = "blue";
}
blueButton.addEventListener("click", blueFunction);
