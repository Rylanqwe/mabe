let balance = 100;
const flipButton = document.getElementById("flip-button");
const result = document.getElementById("result");
const betAmount = document.getElementById("bet-amount");
const betSelection = document.getElementById("bet-selection");
const balanceDisplay = document.getElementById("balance");
const message = document.getElementById("message");

betAmount.addEventListener("input", function() {
    if (betAmount.value > 0 && betSelection.value !== "" && balance >= parseInt(betAmount.value)) {
        flipButton.disabled = false;
    } else {
        flipButton.disabled = true;
    }
});

betSelection.addEventListener("change", function() {
    if (betAmount.value > 0 && betSelection.value !== "" && balance >= parseInt(betAmount.value)) {
        flipButton.disabled = false;
    } else {
        flipButton.disabled = true;
    }
});

flipButton.addEventListener("click", function() {
    let flip = Math.random();
    let heads = "Heads";
    let tails = "Tails";
    let flipResult = flip < 0.5 ? heads : tails;
    result.innerHTML = flipResult;
    if (betSelection.value === flipResult) {
        balance += parseInt(betAmount.value);
        message.innerHTML = "You won!";
    } else {
        balance -= parseInt(betAmount.value);
        message.innerHTML = "You lost.";
    }
    balanceDisplay.innerHTML = balance;
    betAmount.value = "";
    betSelection.value = "";
    flipButton.disabled = true;
});
