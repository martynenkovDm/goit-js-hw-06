const inputEl = document.querySelector('#validation-input');
const maxLength = +inputEl.getAttribute('data-length');

inputEl.addEventListener('blur', (e) => {
    if (e.target.value.length === maxLength) {
        e.target.classList.remove("invalid");
        e.target.classList.add("valid");
        return;
    }
    e.target.classList.add("invalid");
})