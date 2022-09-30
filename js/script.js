function getComputerChoice() {
  let possibleShapes = ['Rock', 'Paper', 'Scissors']
  let chosenShape = possibleShapes[Math.floor(Math.random() * possibleShapes.length)];
  return chosenShape
}

console.log(getComputerChoice());