const nameInputEl = document.getElementById('name-input');
const nameOutputEl = document.getElementById('name-output');

nameInputEl.addEventListener('input', onNameInputInput);

function onNameInputInput(event) {
  nameOutputEl.textContent = nameInputEl.value.length !== 0 ? event.currentTarget.value : 'незнакомец';
}
