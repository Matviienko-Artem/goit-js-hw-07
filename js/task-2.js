const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
  "Что-то новенькое",
];

const createIngredientsList = (ingredients) => {
  const newIngredients = document.querySelector("#ingredients");

  const elementForIngredients = ingredients.map((curentValue) => {
    const newElement = document.createElement("li");
    newElement.textContent = curentValue;
    return newElement;
  });

  newIngredients.append(...elementForIngredients);

  return newIngredients;
};

console.log(createIngredientsList(ingredients));
