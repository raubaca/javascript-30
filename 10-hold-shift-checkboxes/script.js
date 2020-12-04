const checkboxes = document.querySelectorAll('.inbox [type=checkbox]');

let lastChecked;

/**
 * Detect if last and prev are checked when press Shift key
 * @param {*} e
 */
const handleCheck = e => {
  let inBetween = false;
  if (e.shiftKey && lastChecked.checked && e.target.checked) {
    checkboxes.forEach(checkbox => {
      if (checkbox === e.target || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        console.log(checkbox);
        checkbox.checked = true;
      }
    });
  }
  lastChecked = e.target;
};

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
