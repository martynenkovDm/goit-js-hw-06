let counterValue = 0;
const spanValue = document.querySelector('#value');
console.log();
const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
decrement.addEventListener("click", () => {
    counterValue -= 1;
    spanValue.textContent = counterValue;
});
increment.addEventListener("click", () => {
    counterValue += 1;
    spanValue.textContent = counterValue;
});


