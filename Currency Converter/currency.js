const Base_URL =
  "https://api.currencyapi.com/v3/latest?apikey=cur_live_DzZR5rx2affR3QbF4tUrUlfsShJpSQ0oGhavjL35&currencies";
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");

for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click", async (evt) => {
  evt.preventDefault();
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }
  //   try {
  //   console.log(fromCurr.value, toCurr.value);
  const URL = `${Base_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
  let response = await fetch(URL);
  let data = await response.json();
  let data1 = await response.json(data);
  // let rate = data[toCurr.value.toLowerCase()];
  console.log(data1);

  // let response = await fetch(URL);
  // if (!response.ok) {
  //   throw new Error(`HTTP error! Status: ${response.status}`);
  // }
  // let data = await response.json();
  // let rate = data[toCurr.value.toLowerCase()];
  // console.log(rate);
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
});