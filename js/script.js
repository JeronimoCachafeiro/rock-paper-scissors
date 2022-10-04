function getComputerChoice() {
  let possibleShapes = ["rock", "paper", "scissors"];
  let chosenShape =
    possibleShapes[Math.floor(Math.random() * possibleShapes.length)];
  uiComputerChoice.textContent = `Computer chose: ${chosenShape}`;
  results.appendChild(uiComputerChoice);
  return chosenShape;
}

function toTitle(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection == "scissors") ||
    (playerSelection === "paper" && computerSelection == "rock") ||
    (playerSelection === "scissors" && computerSelection == "paper")
  ) {
    uiRoundOutcome.textContent = `You Win! ${toTitle(
      playerSelection
    )} beats ${toTitle(computerSelection)}!`;
    results.appendChild(uiRoundOutcome);
    ++score;
    uiScore.textContent = `Score: ${score}`;
  } else if (
    (playerSelection === "rock" && computerSelection == "paper") ||
    (playerSelection === "paper" && computerSelection == "scissors") ||
    (playerSelection === "scissors" && computerSelection == "rock")
  ) {
    uiRoundOutcome.textContent = `You Lose! ${toTitle(
      computerSelection
    )} beats ${toTitle(playerSelection)}!`;
    results.appendChild(uiRoundOutcome);
    uiScore.textContent = `Score: ${score}`;
  } else {
    uiRoundOutcome.textContent = "It's a tie!";
    results.appendChild(uiRoundOutcome);
    uiScore.textContent = `Score: ${score}`;
  }
}

const btns = document.querySelectorAll(".btn");

const results = document.querySelector(".results");
const uiPlayerSelection = document.createElement("p");
const uiComputerChoice = document.createElement("p");
const uiRoundOutcome = document.createElement("p");
const uiScore = document.createElement("p");
const gameResult = document.createElement("p");

let score = 0;
let count = 1;
for (const btn of btns) {
  btn.addEventListener("click", function () {
    if (count < 5) {
      count++;
      console.log(count);
      console.log(score);
      const playerSelection = this.textContent.toLowerCase();
      uiPlayerSelection.textContent = `You chose: ${playerSelection}`;
      results.appendChild(uiPlayerSelection);
      const computerSelection = getComputerChoice();
      playRound(playerSelection, computerSelection);
      results.appendChild(uiScore);
    } else {
      if (score >= 3) {
        gameResult.textContent = "Congratulations! You win!";
      } else {
        gameResult.textContent = "Oh no! The computer wins!";
      }
      results.appendChild(gameResult);
    }
  });
}
