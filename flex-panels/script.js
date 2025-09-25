const panels = document.querySelectorAll('.panel');

const toggleOpen = (e) => {
  e.target.classList.toggle('open');
};

const toggleOpenActive = (e) => {
  if (e.propertyName.includes('flex')) {
    e.target.classList.toggle('open-active');
  }
};

panels.forEach((panel) => {
  panel.addEventListener('click', toggleOpen);
  panel.addEventListener('transitionend', toggleOpenActive);
});
