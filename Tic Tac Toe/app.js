let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turn0 = true;
  enableBoxes();
  msgcontainer.classList.add("hide");
};
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Button was clicked");

    if (turn0) {
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let psos1val = boxes[pattern[0]].innerText;
    let psos2val = boxes[pattern[1]].innerText;
    let psos3val = boxes[pattern[2]].innerText;

    if ((psos1val != "", psos2val != "", psos3val != "")) {
      if (psos1val === psos2val && psos2val === psos3val) {
        console.log("Winner", psos1val);
        showWinner(psos1val);
      }
    }
  }
};
const showWinner = (winner) => {
  msg.innerText = `Congrulation, winner is ${winner} `;
  msgcontainer.classList.remove("hide");
  disableBoxes();
};

newgamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
