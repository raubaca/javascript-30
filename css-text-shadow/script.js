const body = document.body;
const text = document.querySelector('h1');
const walk = 100;

const shadow = (e) => {
  const { offsetWidth: width, offsetHeight: height } = body;
  let { offsetX: x, offsetY: y } = e;

  // e.currentTarget = this !!!
  if (e.currentTarget !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = (x / width) * walk - walk / 2;
  const yWalk = (y / height) * walk - walk / 2;

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255,255,0,0.7),
    ${xWalk * -1}px ${yWalk * -1}px 0 rgba(255,0,255,0.7),
    ${yWalk * -1}px ${xWalk}px 0 rgba(0,255,255,0.7),
    ${yWalk}px ${xWalk * -1}px 0 rgba(0,0,0,0.3)
  `;
};

body.addEventListener('mousemove', shadow);
