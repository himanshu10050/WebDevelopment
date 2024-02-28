let user_score = 0;
let comp_score = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const computerChoce = () => {
  const options = ["rock", "paper", "scissors"];
  const randInx = Math.floor(Math.random() * 3);
  return options[randInx];
};

const drawGame = () => {
  msg.innerText = "Game was Draw ,Play again";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userwin, UserChoice, compChoice) => {
  if (userwin) {
    user_score++;
    userScorePara.innerText = user_score;
    msg.innerText = `You Win! Your ${UserChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "Green";
  } else {
    comp_score++;
    compScorePara.innerText = comp_score;
    msg.innerText = `You lost. ${compChoice} beats Your ${UserChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playgame = (UserChoice) => {
  const compChoice = computerChoce();

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
    showWinner(userwin, UserChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const UserChoice = choice.getAttribute("id");
    // console.log("chice was clicked", UserChoice);
    playgame(UserChoice);
  });
});
