const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

const handleEnter = e => {
  const li = e.currentTarget;

  li.classList.add('trigger-enter');
  setTimeout(
    () =>
      li.classList.contains('trigger-enter') &&
      li.classList.add('trigger-enter-active'),
    150
  );
  background.classList.add('open');

  const dropdown = li.querySelector('.dropdown');
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();

  const coords = {
    width: dropdownCoords.width,
    height: dropdownCoords.height,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left
  };

  background.style.setProperty('width', `${coords.width}px`);
  background.style.setProperty('height', `${coords.height}px`);
  background.style.setProperty(
    'transform',
    `translate(${coords.left}px, ${coords.top}px)`
  );
};

const handleLeave = e => {
  e.currentTarget.classList.remove('trigger-enter', 'trigger-enter-active');
  background.classList.remove('open');
};

triggers.forEach(trigger =>
  trigger.addEventListener('mouseenter', handleEnter)
);
triggers.forEach(trigger =>
  trigger.addEventListener('mouseleave', handleLeave)
);
