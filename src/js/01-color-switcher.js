const buttonStart = document.querySelector("[data-start]");
const buttonStop = document.querySelector("[data-stop]");
const body = document.querySelector("body");


let interval;

buttonStop.disabled = true;

function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, 0)}`;
      }

buttonStart.addEventListener('click', () => {
    buttonStart.disabled = true;
    buttonStop.disabled = false;
  
    interval = setInterval(() => {
      body.style.backgroundColor = getRandomHexColor();
    }, 1000);
});

buttonStop.addEventListener('click', () => {
    clearInterval(interval);
    buttonStart.disabled = false;
    buttonStop.disabled = true; 
});
