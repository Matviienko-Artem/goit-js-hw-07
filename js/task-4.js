let counterValue = document.querySelector("#value");

let numberValue = Number(counterValue.textContent);

const incrementBtnRef = document.querySelector(
  "#counter > button[data-action='increment']"
);
const decrementBtnRef = document.querySelector(
  "#counter > button[data-action='decrement']"
);

incrementBtnRef.addEventListener("click", () => {
  console.log((numberValue += 1));
  counterValue.textContent = numberValue;
});

decrementBtnRef.addEventListener("click", () => {
  console.log((numberValue -= 1));
  counterValue.textContent = numberValue;
});
