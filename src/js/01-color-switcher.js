const buttonStart = document.querySelector("[data-start]");
const buttonStop = document.querySelector("[data-stop]");
const body = document.querySelector("body");

let interval;

const onClick = () => {
    const color = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;

    body.style.backgroundColor = color;
    buttonStart.setAttribute('disabled', '');
    buttonStop.removeAttribute('disabled');
};

const startColorChange = () => {
    onClick();
    interval = setInterval(onClick, 1000);
};

const stopColorChange = () => {
    clearInterval(interval);
    buttonStart.removeAttribute('disabled');
    buttonStop.setAttribute('disabled', '');
}
buttonStart.addEventListener('click', startColorChange);
    buttonStop.addEventListener('click', stopColorChange);

