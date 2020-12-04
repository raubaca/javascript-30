const playSound = e => {
  // get keyCode from keyboard or touch/click
  const keyCode = e.keyCode || e.target.dataset.key;
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
  // Prevent click event on mobile
  e.preventDefault();
  return false;
};

const removeTransition = e => {
  if (e.propertyName !== 'box-shadow') return;
  e.target.classList.remove('playing');
};

const keys = document.querySelectorAll('.key');

keys.forEach(key => {
  key.addEventListener('transitionend', removeTransition);
  key.addEventListener('touchend', playSound);
  key.addEventListener('click', playSound);
});

window.addEventListener('keydown', playSound);
