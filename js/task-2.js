const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

/*const insertItems = items => {
  items.forEach(item => {
    const liItem = document.createElement('li');
    liItem.textContent = item;
    const ingredients = document.querySelector('#ingredients');
    ingredients.append(liItem);
  });
};
insertItems(ingredients);*/

const ingredientsList = document.querySelector('#ingredients');

const insertIngredients = ingredients.map(ingredient => {
  const liItem = document.createElement('li');
  liItem.textContent = ingredient;

  return liItem;
});

ingredientsList.append(...insertIngredients);
