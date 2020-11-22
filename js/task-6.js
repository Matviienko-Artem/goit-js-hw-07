const inputRef = document.querySelector("#validation-input");

function colorLength() {
  inputRef.value.length >= inputRef.dataset.length
    ? inputRef.classList.add("valid") || inputRef.classList.remove("invalid")
    : inputRef.classList.add("invalid") || inputRef.classList.remove("valid");
}

inputRef.addEventListener("blur", colorLength);
