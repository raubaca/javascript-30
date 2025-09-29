const addItems = document.getElementById('add-items');
const itemsList = document.getElementById('plates');

const items = JSON.parse(localStorage.getItem('items')) || [];

const addItem = (e) => {
  e.preventDefault();
  const text = e.target.querySelector('[name=item]').value;
  const item = { text, done: false };
  items.push(item);
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
  e.target.reset();
};

const populateList = (plates = [], platesList) => {
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `
        <li key=${i}>
          <input type="checkbox" data-index=${i} id="item${i}" ${
        plate.done ? 'checked' : ''
      } />
          <label for="item${i}">${plate.text}</label>
        </li>
      `;
    })
    .join('');
};

const toggleDone = (e) => {
  if (!e.target.matches('input')) return;
  const el = e.target;
  const i = el.dataset.index;
  items[i].done = !items[i].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
};

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);
