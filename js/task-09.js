function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyEl = document.body;
const spanEl = document.querySelector('.color');
const buttonEl = document.querySelector('.change-color');
buttonEl.addEventListener('click', (e) => {
    const randomValue = getRandomHexColor();
    bodyEl.style.backgroundColor = randomValue;
    spanEl.textContent = randomValue;
})