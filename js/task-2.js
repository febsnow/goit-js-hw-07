// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

const insertItems = items => {
  items.forEach(item => {
    const liItem = document.createElement('li');
    liItem.textContent = item;
    const ingredients = document.querySelector('#ingredients');
    ingredients.append(liItem);
  });
};
insertItems(ingredients);

// const insertItems = items => {
//   const itemsName = items;
//   items.forEach(item => {
//     console.log(itemsName);
//     const liItem = document.createElement('li');
//     liItem.textContent = item;
//     console.log(liItem);
//     const placeToInsert = document.querySelector(`#${itemsName}`);
//     placeToInsert.append(liItem);
//   });
// };
// insertItems(ingredients);
