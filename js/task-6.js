const inputEl = document.getElementById('validation-input');
// inputEl.classList.add('.valid');
// inputEl.classList.add('.invalid');

inputEl.addEventListener('blur', inputElBlurHandler);

function inputElBlurHandler(event) {
  if (event.currentTarget.value.length == this.dataset.length) {
    console.log(event.currentTarget.value.length);
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    console.log(event.currentTarget.value.length);
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
}
