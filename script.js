choiceYours = (arg) => {
  console.log(`your choice is ${arg}`);
  let playerChoice = arg;
  let pcsChoice = Math.floor(Math.random() * 3);

  const choices = ["rock", "paper", "scissors"];

  // 0 for rock , 1 for paper , 2 for scissors
  // PLAYER CHOOSE ROCK
  if (playerChoice == "rock" && pcsChoice == 0) {
    console.log(`PC chooses ${choices[pcsChoice]}`);
    console.log("TIE!");
  } else if (playerChoice == "rock" && pcsChoice == 1) {
    console.log(`PC chooses ${choices[pcsChoice]}`);
    console.log("You lose!");
  } else if (playerChoice == "rock" && pcsChoice == 2) {
    console.log(`PC chooses ${choices[pcsChoice]}`);
    console.log("You win!");
  }
  // PLAYER CHOOSE PAPER
  if (playerChoice == "paper" && pcsChoice == 0) {
    console.log(`PC chooses ${choices[pcsChoice]}`);
    console.log("You win!");
  } else if (playerChoice == "paper" && pcsChoice == 1) {
    console.log(`PC chooses ${choices[pcsChoice]}`);
    console.log("TIE!");
  } else if (playerChoice == "paper" && pcsChoice == 2) {
    console.log(`PC chooses ${choices[pcsChoice]}`);
    console.log("You lose!");
  }
  // PLAYER CHOOSE SCISSOR
  if (playerChoice == "scissor" && pcsChoice == 0) {
    console.log(`PC chooses ${choices[pcsChoice]}`);
    console.log("You lose!");
  } else if (playerChoice == "scissor" && pcsChoice == 1) {
    console.log(`PC chooses ${choices[pcsChoice]}`);
    console.log("you win!");
  } else if (playerChoice == "scissor" && pcsChoice == 2) {
    console.log(`PC chooses ${choices[pcsChoice]}`);
    console.log("TIE!");
  } else {
    console.log("nothing.");
  }
};

const gameElement0 = document.getElementById("rockBtn");
gameElement0.addEventListener("click", function () {
  choiceYours("rock");
});

const gameElement1 = document.getElementById("paperBtn");
gameElement1.addEventListener("click", function () {
  choiceYours("paper");
});

const gameElement2 = document.getElementById("scissorBtn");
gameElement2.addEventListener("click", function () {
  choiceYours("scissor");
});
