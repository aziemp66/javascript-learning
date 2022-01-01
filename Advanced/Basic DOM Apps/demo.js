let productNameInput = document.getElementById("product-name");
let productNameMaxLength = productNameInput.maxLength;

let remainingChars = document.getElementById("remaining-chars");

function updateRemainingCharacters() {
    let enteredText = productNameInput.value;
    let enteredTextLength = enteredText.length;

    let remainingCharacters = productNameMaxLength - enteredTextLength;

    remainingChars.textContent = remainingCharacters;
}

productNameInput.addEventListener("input", updateRemainingCharacters);
