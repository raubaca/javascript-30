const dogs = [
  { name: 'Snickers', age: 2 },
  { name: 'hugo', age: 8 },
];

const makeGreen = () => {
  const h1 = document.querySelector('h1');
  h1.style.color = '#BADA55';
  h1.style.fontSize = '50px';
};

// Regular
console.log('Hello');

// Interpolated
console.log('Hi, I am a %s string!', '💩');

// Styled
console.log('%c I am some great text', 'font-size:2em; color:red');

// warning!
console.warn('Oops');

// Error :|
console.error('Shit!');

// Info
console.info('Crocodiles eat 3-4 people per year');

// Testing
const title = document.querySelector('h1');
console.assert(title.classList.contains('ouch'), 'That is wrong');

// clearing
console.clear();

// Viewing DOM Elements
console.log(title);
console.dir(title);

// Grouping together
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count('Wes');
console.count('Wes');
console.count('Wes');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd('fetching data');
    console.log(data);
  });

console.table(dogs);
