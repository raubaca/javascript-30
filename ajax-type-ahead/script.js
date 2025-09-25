const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

let cities = [];

const getCities = async () => {
  const response = await fetch(endpoint);
  const data = await response.json();
  cities = data;
};

getCities();

const findMatches = (wordToMatch, cities) =>
  cities.filter((place) => {
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });

const displayMatches = (e) => {
  const { value } = e.target;
  const matchArray = findMatches(value, cities);
  const html = matchArray
    .map((place) => {
      const regex = new RegExp(value, 'gi');
      const cityName = place.city.replace(regex, `<em>${value}</em>`);
      const stateName = place.state.replace(regex, `<em>${value}</em>`);
      const population = parseInt(place.population).toLocaleString('en-US');
      return `
        <li>
          <span class="name">${cityName}, ${stateName}</span>
          <span class="population">${population}</span>
        </li>
      `;
    })
    .join('');
  suggestions.innerHTML = html;
};

const searchInput = document.getElementById('search');
const suggestions = document.getElementById('suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
