const refs = {
  inputField: document.querySelector('[type=number]'),
  createDivBtn: document.querySelector('[data-action="render"]'),
  resetDivBtn: document.querySelector('[data-action="destroy"]'),
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const amountToCreate = refs.inputField.value;

const boxes = document.getElementById('boxes');

refs.createDivBtn.addEventListener('click', onCreateDivBtnClick);
refs.resetDivBtn.addEventListener('click', onResetDivBtnClick);

function onCreateDivBtnClick() {
  const arrr = [];
  arrr.length = refs.inputField.value;

  for (let i = 1; i <= arrr.length; i += 1) {
    const divEl = document.createElement('div');
    const red = getRandomInt(255);
    const green = getRandomInt(255);
    const blue = getRandomInt(255);
    divEl.style.width = '30px';
    divEl.style.height = '30px';
    divEl.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    boxes.appendChild(divEl);
  }
}

function onResetDivBtnClick() {
  refs.inputField.value = '';
  boxes.innerHTML = '';
}
