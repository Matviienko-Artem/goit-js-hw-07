const inputRef = document.querySelector("#font-size-control");
const spanTextRef = document.querySelector("#text");

function changeFontSize() {
  spanTextRef.style.fontSize = `${inputRef.value}px`;
}

inputRef.addEventListener("input", changeFontSize);
