import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

const selectors = {
  button: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const today = new Date();
    if (selectedDates[0] > today) {
      selectors.button.disabled = false;
    } else {
      Notiflix.Notify.failure('Please choose a date in the future');
    }

    selectors.button.addEventListener('click', () => {
      selectors.button.disabled = true;
      const id = setInterval(() => {
        timer(selectedDates[0], id);
      }, 1000);
    });
  },
};

flatpickr('#datetime-picker', options);

function timer(selectDate, id) {
  const today = Date.now();
  const delta = selectDate - today;

  if (delta <= 0) {
    clearInterval(id);
    return;
  }

  const { days, hours, minutes, seconds } = convertMs(delta);
  createTimer({ days, hours, minutes, seconds });

  function createTimer({ days, hours, minutes, seconds }) {
    selectors.days.textContent = days;
    selectors.hours.textContent = hours;
    selectors.minutes.textContent = minutes;
    selectors.seconds.textContent = seconds;
  }
  console.log(createTimer);
  function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }

  function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = addLeadingZero(Math.floor(ms / day));
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    const seconds = addLeadingZero(
      Math.floor((((ms % day) % hour) % minute) / second)
    );

    return { days, hours, minutes, seconds };
  }
}
