let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time');
const form = document.querySelector('.form');

const timer = seconds => {
  // Clear active timers
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;

  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // Should stop
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    // Display
    displayTimeLeft(secondsLeft);
  }, 1000);
};

const displayTimeLeft = seconds => {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${
    remainderSeconds < 10 ? '0' : ''
  }${remainderSeconds}`;
  timerDisplay.textContent = display;
};

const displayEndTime = timestamp => {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes();
  endTime.textContent = `Be back at ${adjustedHour}:${
    minutes < 10 ? '0' : ''
  }${minutes}`;
};

const startTimer = e => {
  const seconds = e.currentTarget.dataset.time;
  timer(seconds);
};

const inputTimer = e => {
  e.preventDefault();
  const mins = form.minutes.value;
  timer(mins * 60);
  form.reset();
};

buttons.forEach(button => button.addEventListener('click', startTimer));
form.addEventListener('submit', inputTimer);
