const sumCategories = document.querySelectorAll("#categories > .item");
console.log(`В списке ${sumCategories.length} категории.`);

const titleCategory = document.querySelectorAll("#categories > .item > h2");

const sumElements = document.querySelectorAll(".item > ul");

const answear = sumElements.forEach((li, index) =>
  console.log(
    `Категория: ${titleCategory[index].textContent}\nКоличество элементов: ${sumElements[index].children.length}`
  )
);
