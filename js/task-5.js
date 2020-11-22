const nameInputRef = document.querySelector("#name-input");
const nameOutputRef = document.querySelector("#name-output");

function changeName(e) {
  nameOutputRef.textContent =
    nameInputRef.value === "" ? "незнакомец" : e.target.value;
}

nameInputRef.addEventListener("input", changeName);
