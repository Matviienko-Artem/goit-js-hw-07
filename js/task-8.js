{
  /* <div id="controls">
  <input type="number" min="0" max="100" step="1" />
  <button type="button" data-action="render">Создать</button>
  <button type="button" data-action="destroy">Очистить</button>
</div>

<div id="boxes"></div> */
}

const inputNambersRef = document.querySelector("#controls>input");
const btnCreateRef = document.querySelector('button[data-action="render"]');
const btnDestroyRef = document.querySelector('button[data-action="destroy"]');
const boxesForDivRef = document.querySelector("#boxes");
console.log(inputNambersRef);

const createElement = document.createElement("div");
boxesForDivRef.append(createElement);
