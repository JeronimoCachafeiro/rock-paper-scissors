function getComputerChoice() {
  let possibleShapes = ['rock', 'paper', 'scissors']
  let chosenShape = possibleShapes[Math.floor(Math.random() * possibleShapes.length)];
  return chosenShape
}

function getPlayerChoice() {
  let playerChoice = prompt('Choose a shape: ').toLowerCase();
  return playerChoice;
}

function playRound(playerSelection, computerSelection) {
    
}

