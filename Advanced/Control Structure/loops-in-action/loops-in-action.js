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
