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
    console.log(
      `You Win! ${toTitle(playerSelection)} beats ${toTitle(
        computerSelection
      )}!`
    );
    return 1;
  } else if (
    (playerSelection === "rock" && computerSelection == "paper") ||
    (playerSelection === "paper" && computerSelection == "scissors") ||
    (playerSelection === "scissors" && computerSelection == "rock")
  ) {
    console.log(
      `You Lose! ${toTitle(computerSelection)} beats ${toTitle(
        playerSelection
      )}!`
    );
    return 0;
  } else {
    console.log("It's a tie!");
    return 0;
  }
}

function game() {
  let score = 0;
  for (let i = 0; i < 5; i++) {
    score += playRound(getPlayerChoice(), getComputerChoice(), score);
  }
  console.log(`Final score: ${score}`);
}

game();