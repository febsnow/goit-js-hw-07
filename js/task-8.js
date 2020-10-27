const refs = {
  inputField: document.querySelector('[type=number]'),
  createDivBtn: document.querySelector('[data-action="render"]'),
  resetDivBtn: document.querySelector('[data-action="destroy"]'),
  boxes: document.getElementById('boxes'),
};

// refs.createDivBtn.addEventListener('click', onCreateDivBtnClick);
// refs.resetDivBtn.addEventListener('click', destroyBoxes);

// function getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }

// function createDivs(amount) {
//   const divArrayEl = [];
//   divArrayEl.length = amount;

//   let width = 30;
//   let height = 30;
//   const step = 10;

//   for (let i = 1; i <= divArrayEl.length; i += 1) {
//     let divEl = document.createElement('div');
//     const red = getRandomInt(255);
//     const green = getRandomInt(255);
//     const blue = getRandomInt(255);

//     divEl.style.width += `${width}px`;
//     divEl.style.height += `${height}px`;
//     width += step;
//     height += step;

//     divEl.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

//     refs.boxes.appendChild(divEl);
//   }
// }

// function onCreateDivBtnClick() {
//   createDivs(refs.inputField.value);
// }

// function destroyBoxes() {
//   refs.inputField.value = '';
//   refs.boxes.innerHTML = '';
// }

//-решение ментора
const randomColor = () => {
  const r = Math.round(Math.random() * 256);
  const g = Math.round(Math.random() * 256);
  const b = Math.round(Math.random() * 256);

  return `rgb(${r},${g},${b})`;
};

const INITIAL_SIZE = 30;
const STEP = 10;

refs.createDivBtn.addEventListener('click', onCreateDivBtnClick(Number(refs.inputField.value)));
refs.resetDivBtn.addEventListener('click', destroyBoxes);

function onCreateDivBtnClick(amount) {
  const boxesEl = [...new Array(amount)];
  const arrBoxes = boxesEl.map((_, i) => createBox(i));

  return boxes.append(...arrBoxes);
}

function createBox(i) {
  const box = document.createElement('div');
  box.style.backgroundColor = randomColor();
  box.style.height = `${i * STEP + INITIAL_SIZE}px`;
  box.style.width = `${i * STEP + INITIAL_SIZE}px`;

  return box;
}

function destroyBoxes() {
  refs.inputField.value = '';
  refs.boxes.innerHTML = '';
}
