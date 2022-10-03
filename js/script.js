function getComputerChoice() {
  let possibleShapes = ["rock", "paper", "scissors"];
  let chosenShape = possibleShapes[Math.floor(Math.random() * possibleShapes.length)];
  console.log(chosenShape);
  return chosenShape;
}

function getPlayerChoice() {
  let playerChoice = prompt("Choose a shape: ").toLowerCase();
  return playerChoice;
}

function playRound(computerSelection, playerSelection) {
  // Player wins
  if (playerSelection === "rock" && computerSelection == "scissors") {
    return "You Win! Rock beats Scissors!";
  } else if (playerSelection === "paper" && computerSelection == "rock") {
    return "You Win! Paper beats Rock!";
  } else if (playerSelection === "scissors" && computerSelection == "paper") {
    return "You Win! Scissors beat Paper!";  
  } 

}
