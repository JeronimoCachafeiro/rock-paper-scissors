function getComputerChoice() {
  let possibleShapes = ['Rock', 'Paper', 'Scissors']
  let chosenShape = possibleShapes[Math.floor(Math.random() * possibleShapes.length)];
  return chosenShape
}

function getPlayerChoice() {
  let playerChoice = prompt('Choose a shape: ').toLowerCase();
  return playerChoice;
}

