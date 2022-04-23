"use strict";

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const editScore = function (score) {
  document.querySelector(".score").textContent = score;
};

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (guess < 1 || guess > 20) {
    displayMessage("🛑 Enter Number between 1 and 20 !");
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number !");

    document.querySelector(".number").textContent = secretNumber;

    document.querySelector(".number").style.width = "24rem";

    document.querySelector("body").style.backgroundImage =
      "linear-gradient(to bottom right, #2f9e44, #40c057)";

    if (score > highScore) {
      highScore = score;

      document.querySelector(".highscore").textContent = score;
    }
  } else if (guess < secretNumber && score > 0) {
    score--;

    editScore(score);

    if (guess < secretNumber - 2) displayMessage("📉 Too Low !");
    else displayMessage("📉 Low !");
  } else if (guess > secretNumber && score > 0) {
    score--;

    editScore(score);

    if (guess > secretNumber + 2) displayMessage("📈 Too High !");
    else displayMessage("📈 High !");
  }
  if (score === 0) displayMessage("💥 You Lost !");
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  score = 20;
  editScore("20");

  document.querySelector(".guess").value = null;

  displayMessage("Start guessing...");

  document.querySelector(".number").textContent = "?";

  document.querySelector(".number").style.width = "15rem";

  document.querySelector("body").style.backgroundImage =
    "linear-gradient(to bottom right, #212529, #495057)";
});
