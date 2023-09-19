const increaseButton = document.querySelector('.btn-increase');
const decreaseButton = document.querySelector('.btn-decrease');
const p = document.querySelector('.p')

let count = 1;



increaseButton.addEventListener('click', () => {
    count++;
    p.innerHTML = count;
});

decreaseButton.addEventListener('click', () => {
    if (count > 1) {
        count--;
        p.innerHTML = count;
    }
}); 