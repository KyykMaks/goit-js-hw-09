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
    btnStart.disabled = true;
    btnStop.disabled = false;
  
    interval = setInterval(() => {
      body.style.backgroundColor = getRandomHexColor();
    }, 1000);
});

buttonStop.addEventListener('click', () => {
    clearInterval(interval);
    btnStart.disabled = false;
    btnStop.disabled = true; 
});



// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215)
//       .toString(16)
//       .padStart(6, 0)}`;
//   }
  
//   btnStart.addEventListener('click', () => {
//     btnStart.disabled = true;
//     btnStop.disabled = false;
  
//     timerId = setInterval(() => {
//       body.style.backgroundColor = getRandomHexColor();
//     }, 1000);
//   });
  
//   btnStop.addEventListener('click', () => {
//     clearInterval(timerId);
//     btnStart.disabled = false;
//     btnStop.disabled = true;
//   });