const sumCategories = document.querySelectorAll("#categories > .item");
console.log(`В списке ${sumCategories.length} категории.`);

const titleCategory = document.querySelectorAll("#categories > .item > h2");

const sumElements = document.querySelectorAll(".item > ul");

// console.log(
//   `Категория: ${titleCategory[0].textContent}\nКоличество элементов: ${sumElements[0].children.length}`
// );

const numbers = [0, 1, 2];
const answer = numbers.forEach((li) =>
  console.log(
    `Категория: ${titleCategory[li].textContent}\nКоличество элементов: ${sumElements[li].children.length}`
  )
);
