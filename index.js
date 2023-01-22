let balance = 10;
const flipButton = document.getElementById("flip-button");
const result = document.getElementById("result");
const betAmount = document.getElementById("bet-amount");
const betSelection = document.getElementById("bet-selection");
const balanceDisplay = document.getElementById("balance");
const message = document.getElementById("message");

betAmount.addEventListener("input", function() {
  if (betAmount.value > 0 && betSelection.value !== "") {
    flipButton.disabled = false;
  } else {
    flipButton.disabled = true;
  }
});

betSelection.addEventListener("change", function() {
  if (betAmount.value > 0 && betSelection.value !== "") {
    flipButton.disabled = false;
  } else {
    flipButton.disabled = true;
  }
});

flipButton.addEventListener("click", function() {
  let flip = Math.random();
  if (flip < 0.5) {
    result.innerHTML = "Heads";
    if (betSelection.value === "heads") {
      balance += parseInt(betAmount.value);
      message.innerHTML = "You won!";
    } else {
      balance -= parseInt(betAmount.value);
      message.innerHTML = "You lost.";
    }
  } else {
    result.innerHTML = "Tails";
    if (betSelection.value === "tails") {
      balance += parseInt(betAmount.value);
      message.innerHTML = "You won!";
    } else {
      balance -= parseInt(betAmount.value);
      message.innerHTML = "You lost.";
    }
  }
  balanceDisplay.innerHTML = balance;
  betAmount.value = "";
  betSelection.value = "";
  flipButton.disabled = true;
