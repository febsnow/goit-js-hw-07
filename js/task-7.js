const fontSizeControlEl = document.getElementById('font-size-control');

const textEl = document.getElementById('text');

fontSizeControlEl.addEventListener('input', fontSizeControlHandler);

function fontSizeControlHandler() {
  console.log(fontSizeControlEl.value);
  textEl.style.fontSize = `${this.value}px`;
  // textEl.style.fontSize = this.value + 'px';
}
