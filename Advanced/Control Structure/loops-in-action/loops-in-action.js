//Javascript Calculator

const calculateSumButton = document.querySelector("#calculator button");

function calculateSum() {
    const userNumberInput = document.getElementById("user-number");
    const enteredNumber = userNumberInput.value;

    let sumUpToNumber = 0;

    for (let i = 0; i <= enteredNumber; i++) {
        sumUpToNumber = sumUpToNumber + i;
    }

    const outputResult = document.getElementById("calculated-sum");

    outputResult.textContent = sumUpToNumber;
    outputResult.style.display = "block";
}

calculateSumButton.addEventListener("click", calculateSum);

//Highlight Links
const highlightButton = document.getElementById("highlight-button");

/* const allLinks = [
    (firstLink = document.getElementById("first-link")),
    (secondLink = document.getElementById("second-link")),
    (thirdLink = document.getElementById("third-link")),
]; */
const allLinks = document.querySelectorAll("#highlight-links a");

function highlightFunction() {
    for (const link of allLinks) {
        link.classList.add("highlight");
    }
}

highlightButton.addEventListener("click", highlightFunction);

//Your Information
