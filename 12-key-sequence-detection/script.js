const pressed = [];
const secretCode = 'rau';

window.addEventListener('keyup', e => {
  // Add key to array
  pressed.push(e.key);
  // Limit array length
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  // BANG!
  if (pressed.join('').includes(secretCode)) {
    cornify_add();
  }
});
