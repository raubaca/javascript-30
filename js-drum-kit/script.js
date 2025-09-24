const playSound = (e) => {
  // get keyCode from keyboard or touch/click
  const keyCode = e.keyCode || e.currentTarget.dataset.key;

  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`div[data-key="${keyCode}"]`);

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
};

const removeTransition = (e) => {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
};

const keys = document.querySelectorAll('.key');

keys.forEach((key) => {
  key.addEventListener('transitionend', removeTransition);
  key.addEventListener('touchend', playSound);
  key.addEventListener('click', playSound);
});

window.addEventListener('keydown', playSound);
