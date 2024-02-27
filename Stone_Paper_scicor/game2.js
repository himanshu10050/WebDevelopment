let user_score = 0;
let comp_score = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const computerChoce = () => {
  const options = ["rock", "paper", "scissors"];
  const randInx = Math.floor(Math.random() * 3);
  return options[randInx];
};

const drawGame = () => {
  console.log("Game was Draw");
  msg.innerText = "Game was Draw ,Play again";
};

const showWinner = (userwin) => {
  if (userwin) {
    console.log("You Win!");
    msg.innerText = "You Win!";
  } else {
    console.log("You Lose.");
    msg.innerText = "You Lose.";
  }
};

const playgame = (UserChoice) => {
  console.log("User choice = ", UserChoice);
  const compChoice = computerChoce();
  console.log("Computer choice = ", compChoice);

  if (UserChoice === compChoice) {
    drawGame();
  } else {
    let userwin = true;
    if (UserChoice === "rock") {
      userwin = compChoice === "paper" ? false : true;
    } else if (UserChoice === "paper") {
      userwin = compChoice === "scissors" ? false : true;
    } else {
      userwin = compChoice === "scissors" ? false : true;
    }
    showWinner(userwin);
  }
};

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const UserChoice = choice.getAttribute("id");
    // console.log("chice was clicked", UserChoice);
    playgame(UserChoice);
  });
});
