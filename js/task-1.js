const itemsRef = document.querySelectorAll('li.item');

// console.log(itemsRef);

const categoriesCounter = items => {
  console.log(`В списке ${items.length} категории`);

  items.forEach(item => {
    const itemTitle = item.querySelector('h2');
    const itemContent = item.querySelectorAll('li');

    console.log(`Категория: ${itemTitle.textContent},\nКоличество элементов: ${itemContent.length}`);
  });
};

console.log(categoriesCounter(itemsRef));
