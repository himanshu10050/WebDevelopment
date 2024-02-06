// console.log("hello javascript");
// // alert("hello");
// name = "himanshu";
// console.log(name);

let result = prompt("enter a number");

if (result > 80 && result < 100) {
  console.log(result, "  Student got A grade");
} else if (result > 60 && result < 80) {
  console.log(result, "  Student got B grade");
} else if (result > 40 && result < 60) {
  console.log(result, "  Student got c grade");
} else {
  console.log(result, "  Student got passing grade");
}
