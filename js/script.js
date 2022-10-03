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

function toTitle(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection == "scissors") ||
    (playerSelection === "paper" && computerSelection == "rock") ||
    (playerSelection === "scissors" && computerSelection == "paper")
  ) {
    return `You Win! ${toTitle(playerSelection)} beats ${toTitle(
      computerSelection
    )}!`;
  } else if (
    (playerSelection === "rock" && computerSelection == "paper") ||
    (playerSelection === "paper" && computerSelection == "scissors") ||
    (playerSelection === "scissors" && computerSelection == "rock")
  ) {
    return `You Lose! ${toTitle(computerSelection)} beats ${toTitle(
      playerSelection
    )}!`;
  } else {
    return "It's a tie!";
  }
}

console.log(playRound(getPlayerChoice(), getComputerChoice()));
