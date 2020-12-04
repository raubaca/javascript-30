const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

const logText = e => {
  console.log(e.currentTarget.classList.value);
  e.stopPropagation();
};

divs.forEach(div =>
  div.addEventListener('click', logText, {
    capture: false,
    once: true
  })
);

button.addEventListener(
  'click',
  () => {
    console.log('Click!!!');
  },
  { once: true }
);
