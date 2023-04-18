const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output')
inputEl.addEventListener('input', (e) => {
    if (e.target.value === '') {
        spanEl.textContent = "Anonymous";
        return;
    }
    spanEl.textContent = e.target.value;
});