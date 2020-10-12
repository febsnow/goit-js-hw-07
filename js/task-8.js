const refs = {
  inputField: document.querySelector('[type=number]'),
  createDivBtn: document.querySelector('[data-action="render"]'),
  resetDivBtn: document.querySelector('[data-action="destroy"]'),
  boxes: document.getElementById('boxes'),
};

refs.createDivBtn.addEventListener('click', onCreateDivBtnClick);
refs.resetDivBtn.addEventListener('click', destroyBoxes);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function createDivs(amount) {
  const divArrayEl = [];
  divArrayEl.length = amount;

  let width = 30;
  let height = 30;
  const step = 10;

  for (let i = 1; i <= divArrayEl.length; i += 1) {
    let divEl = document.createElement('div');
    const red = getRandomInt(255);
    const green = getRandomInt(255);
    const blue = getRandomInt(255);

    divEl.style.width += `${width}px`;
    divEl.style.height += `${height}px`;
    width += step;
    height += step;

    divEl.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    refs.boxes.appendChild(divEl);
  }
}

function onCreateDivBtnClick() {
  createDivs(refs.inputField.value);
}

function destroyBoxes() {
  refs.inputField.value = '';
  refs.boxes.innerHTML = '';
}
