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
const userDataButton = document.getElementById("user-data-button");

const userDataInfo = {
    Name: "Azie",
    Age: "18",
    Institution: "Sriwijaya University",
};

function userDataDisplay() {
    const userDataOutput = document.getElementById("output-user-data");

    userDataOutput.innerHTML = "";

    for (const data in userDataInfo) {
        const userDataListItem = document.createElement("li");
        const outputText = data.toUpperCase() + " : " + userDataInfo[data];
        userDataListItem.textContent = outputText;
        userDataOutput.append(userDataListItem);
    }
}

userDataButton.addEventListener("click", userDataDisplay);

//Statistics (Roll Dice)

const rollDiceButton = document.getElementById("statistics-button");

function rollDice() {
    return Math.floor(Math.random() * 6) + 1; // Math.random() yields ALL FLOATING random number between 0 & 1 (1 isn't included but 0 does)
}

function deriveNumberOfDiceRolls() {
    const targetNumberInput = document.getElementById("user-target-number");
    const diceRollsList = document.getElementById("dice-rolls");

    const enteredNumber = targetNumberInput.value;
    diceRollsList.innerHTML = "";

    let hasRolledTargetNumber = false;
    let numberOfRolls = 0;

    while (!hasRolledTargetNumber) {
        const rolledNumber = rollDice();

        /* if (rolledNumber == enteredNumber) {
            hasRolledTargetNumber = true;
        } */

        numberOfRolls++;

        const diceRollsListItem = document.createElement("li");
        const outputText = "Roll " + numberOfRolls + " : " + rolledNumber;
        diceRollsListItem.textContent = outputText;
        diceRollsList.append(diceRollsListItem);
        hasRolledTargetNumber = rolledNumber == enteredNumber;
    }

    const outputTotalRolls = document.getElementById("output-total-rolls");
    const outputTargetNumber = document.getElementById("output-target-number");

    outputTotalRolls.textContent = numberOfRolls;
    outputTargetNumber.textContent = enteredNumber;
}

rollDiceButton.addEventListener("click", deriveNumberOfDiceRolls);
