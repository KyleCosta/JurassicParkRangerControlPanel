/*const btn = document.querySelector('.Trexb');

btn.addEventListener('click', () => {

const currentColor = btn.style.backgroundColor;

    if (currentColor === 'red') {
        btn.style.backgroundColor = 'green';
    } else {
        btn.style.backgroundColor = 'red';
    }
});*/

const buttons = document.querySelectorAll('.control-panel-containers button');

function toggleColor() {
    const currentColor = this.style.backgroundColor;

    if (currentColor === 'red') {
        this.style.backgroundColor = 'green';
    } else {
        this.style.backgroundColor = 'red';
    }
}

buttons.forEach((btn) => {
    btn.addEventListener('click', toggleColor);
});
