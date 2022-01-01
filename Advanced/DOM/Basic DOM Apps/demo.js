const productNameInput = document.getElementById("product-name");
const productNameMaxLength = productNameInput.maxLength;

const remainingChars = document.getElementById("remaining-chars");

function updateRemainingCharacters() {
    const enteredText = productNameInput.value;
    const enteredTextLength = enteredText.length;

    const remainingCharacters = productNameMaxLength - enteredTextLength;

    remainingChars.textContent = remainingCharacters;

    if (remainingCharacters === 0) {
        remainingChars.classList.add("error");
        productNameInput.classList.add("error");
    } else if (remainingCharacters <= 10) {
        remainingChars.classList.add("warning");
        productNameInput.classList.add("warning");
        remainingChars.classList.remove("error");
        productNameInput.classList.remove("error");
    } else {
        remainingChars.classList.remove("warning", "error");
        productNameInput.classList.remove("warning", "error");
    }
}

productNameInput.addEventListener("input", updateRemainingCharacters);
