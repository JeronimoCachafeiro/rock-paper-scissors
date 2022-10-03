function getComputerChoice() {
  let possibleShapes = ["rock", "paper", "scissors"];
  let chosenShape =
    possibleShapes[Math.floor(Math.random() * possibleShapes.length)];
  console.log(chosenShape);
  return chosenShape;
}

function getPlayerChoice() {
  let playerChoice = prompt("Choose a shape: ").toLowerCase();
  return playerChoice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection == "scissors") {
    return "You Win! Rock beats Scissors!";
  } else if (playerSelection === "paper" && computerSelection == "rock") {
    return "You Win! Paper beats Rock!";
  } else if (playerSelection === "scissors" && computerSelection == "paper") {
    return "You Win! Scissors beat Paper!";
  } else if (playerSelection === "rock" && computerSelection == "paper") {
    return "You Lose! Paper beats Rock!";
  } else if (playerSelection === "paper" && computerSelection == "scissors") {
    return "You Lose! Scissors beat Paper!";
  } else if (playerSelection === "scissors" && computerSelection == "rock") {
    return "You Lose! Rock beats Scissors!";
  } else {
    return "It's a tie!";
  }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

