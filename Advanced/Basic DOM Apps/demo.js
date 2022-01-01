const productNameInput = document.getElementById("product-name");
const productNameMaxLength = productNameInput.maxLength;

const remainingChars = document.getElementById("remaining-chars");

function updateRemainingCharacters() {
    const enteredText = productNameInput.value;
    const enteredTextLength = enteredText.length;

    const remainingCharacters = productNameMaxLength - enteredTextLength;

    remainingChars.textContent = remainingCharacters;
}

productNameInput.addEventListener("input", updateRemainingCharacters);
