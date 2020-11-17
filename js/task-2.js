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

  const listElement0 = document.createElement("li");
  listElement0.textContent = ingredients[0];

  const listElement1 = document.createElement("li");
  listElement1.textContent = ingredients[1];

  const listElement2 = document.createElement("li");
  listElement2.textContent = ingredients[2];

  const listElement3 = document.createElement("li");
  listElement3.textContent = ingredients[3];

  const listElement4 = document.createElement("li");
  listElement4.textContent = ingredients[4];

  const listElement5 = document.createElement("li");
  listElement5.textContent = ingredients[5];

  newIngredients.append(
    listElement0,
    listElement1,
    listElement2,
    listElement3,
    listElement4,
    listElement5
  );

  return newIngredients;
};

console.log(createIngredientsList(ingredients));
