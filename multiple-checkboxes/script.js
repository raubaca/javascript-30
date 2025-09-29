const checkboxes = document.querySelectorAll('.inbox [type=checkbox]');

let lastChecked;

const handleCheck = (e) => {
  if (lastChecked === e.target) return;

  let inBetween = false;

  if (e.shiftKey && lastChecked?.checked && e.target.checked) {
    checkboxes.forEach((checkbox) => {
      if (checkbox === e.target || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = e.target;
};

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener('click', handleCheck)
);
