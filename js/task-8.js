const inputNambersRef = document.querySelector("#controls>input");
const btnCreateRef = document.querySelector('button[data-action="render"]');
const btnDestroyRef = document.querySelector('button[data-action="destroy"]');
const boxesForDivRef = document.querySelector("#boxes");

function createBoxes(amount) {
  const masiveNewDiv = [];
  let newElement;
  for (let i = 1; i <= amount; i += 1) {
    newElement = document.createElement("div");
    newElement.style.backgroundColor =
      "#" +
      (Math.random().toString(16) + "000000").substring(2, 8).toUpperCase();
    newElement.style.width = `${i * 10 + 20}px`;
    newElement.style.height = `${i * 10 + 20}px`;
    masiveNewDiv.push(newElement);
  }
  boxesForDivRef.append(...masiveNewDiv);
  console.log(boxesForDivRef);
}
// -------------Второй вариант через appendChild--------------
// function createBoxes(amount) {
//   let newElement;
//   for (let i = 1; i <= amount; i += 1) {
//     newElement = document.createElement("div");
//     newElement.style.backgroundColor = "teal";
//     newElement.style.width = `${i * 10 + 20}px`;
//     newElement.style.height = `${i * 10 + 20}px`;
//     boxesForDivRef.appendChild(newElement);
//   }
// }
// -----------------------------------------------------------

// createBoxes(10);

btnCreateRef.addEventListener("click", () => {
  createBoxes(inputNambersRef.value);
});

btnDestroyRef.addEventListener("click", () => {
  inputNambersRef.value = "";
  boxesForDivRef.innerHTML = "";
});
