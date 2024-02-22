// Event listner
let modebtn = document.querySelector("#btn1");
let body = document.querySelector("body");

let currMode = "light";
modebtn.addEventListener("click", () => {
  // console.log("button was clicked");
  if (currMode === "light") {
    currMode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
  } else {
    currMode = "light";
    body.classList.add("light");
    body.classList.remove("dark");
  }
  console.log(currMode);
});
