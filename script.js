choiceYours = (arg) => {
  console.log(`your choice is ${arg}`);
  let playerChoice = arg;
  let pcsChoice = Math.floor(Math.random() * 3);
  const choices = ["rock", "paper", "scissors"];

  document.getElementById("pc-choice").innerHTML = `${choices[pcsChoice]}`;

  // 0 for rock , 1 for paper , 2 for scissors
  // PLAYER CHOOSE ROCK
  if (playerChoice == "rock" && pcsChoice == 0) {
    // console.log(`PC chooses ${choices[pcsChoice]}`);
    // console.log("TIE!");
    var resultA = "TIE!";
  } else if (playerChoice == "rock" && pcsChoice == 1) {
    // console.log(`PC chooses ${choices[pcsChoice]}`);
    // console.log("You lose!");
    var resultA = "You lose!";
  } else if (playerChoice == "rock" && pcsChoice == 2) {
    // console.log(`PC chooses ${choices[pcsChoice]}`);
    // console.log("You win!");
    var resultA = "You win!";
  }
  // PLAYER CHOOSE PAPER
  if (playerChoice == "paper" && pcsChoice == 0) {
    // console.log(`PC chooses ${choices[pcsChoice]}`);
    // console.log("You win!");
    var resultA = "You win!";
  } else if (playerChoice == "paper" && pcsChoice == 1) {
    // console.log(`PC chooses ${choices[pcsChoice]}`);
    // console.log("TIE!");
    var resultA = "TIE!";
  } else if (playerChoice == "paper" && pcsChoice == 2) {
    // console.log(`PC chooses ${choices[pcsChoice]}`);
    // console.log("You lose!");
    var resultA = "You lose!";
  }
  // PLAYER CHOOSE SCISSOR
  if (playerChoice == "scissor" && pcsChoice == 0) {
    // console.log(`PC chooses ${choices[pcsChoice]}`);
    // console.log("You lose!");
    var resultA = "You lose!";
  } else if (playerChoice == "scissor" && pcsChoice == 1) {
    // console.log(`PC chooses ${choices[pcsChoice]}`);
    // console.log("you win!");
    var resultA = "You win!";
  } else if (playerChoice == "scissor" && pcsChoice == 2) {
    // console.log(`PC chooses ${choices[pcsChoice]}`);
    // console.log("TIE!");
    var resultA = "TIE!";
  } else {
    // ???
    console.log("nothing.");
  }
  // DECLARING RESULT
  document.getElementById("result").innerHTML = resultA;
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
