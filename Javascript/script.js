// Event listner
let modebtn = document.querySelector("#btn1");
let currMode = "light";
modebtn.addEventListener("click", () => {
  // console.log("button was clicked");
  if (currMode === "light") {
    currMode = "dark";
    document.querySelector("body").style.backgroundColor = "black";
  } else {
    currMode = "light";
    document.querySelector("body").style.backgroundColor = "white";
  }
  console.log(currMode);
});
