const secondHand = document.getElementById('second');
const minHand = document.getElementById('min');
const hourHand = document.getElementById('hour');

const setDate = () => {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hour = now.getHours();

  const secondsDegrees = seconds * 6;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minDegrees = minutes * 6 + secondsDegrees / 60;
  minHand.style.transform = `rotate(${minDegrees}deg)`;

  const hourDegrees = hour * 30 + minDegrees / 12;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
};

setInterval(setDate, 1000);
