const counterValue = document.getElementById('value');
counterValue.textContent = 0;

const increaseBtn = document.querySelector('[data-action="increment"]');
const decreaseBtn = document.querySelector('[data-action="decrement"]');

increaseBtn.addEventListener('click', onIncreaseBtnClick);
decreaseBtn.addEventListener('click', onDecreaseBtnClick);

function onIncreaseBtnClick() {
  counterValue.textContent = Number(counterValue.textContent) + 1;
}

function onDecreaseBtnClick() {
  counterValue.textContent -= 1;
}
