import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { debounce } from 'debounce';
import { fetchCountries } from './service/fetchCountries';
import './css/styles.css';

const DEBOUNCE_DELAY = 300;
const inputEl = document.querySelector('#search-box');
const listEl = document.querySelector('.country-list');
const countryCardEl = document.querySelector('.country-info');

inputEl.addEventListener('input', debounce(textValue, DEBOUNCE_DELAY));

function textValue(e) {
  const inputValue = e.target.value.trim();
  if (inputValue === '') {
    listEl.innerHTML = '';
    return;
  }

  fetchCountries(inputValue)
    .then(countries => {
      if (countries.length > 10) {
        return Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      }
      if (1 < countries.length && countries.length <= 10) {
        listEl.innerHTML = '';
        return getMarkup(countries);
      }
      if (1 === countries.length) {
        return getCartMarkup(countries);
      }
    })
    .catch(error => Notify.failure('Oops, there is no country with that name'));
}

function getMarkup(countries) {
  // listEl.classList.add('list-style: none')
  const markup = countries
    .map(
      ({ flags, name }) => /*html*/ `
       <li>
        <img src="${flags.svg}" alt="Flag: ${name.official}">
        <p>${name.common}</p>
      </li>
  `
    )
    .sort((a, b) => a.localeCompare(b))
    .join('');
  listEl.innerHTML = markup;
}

function getCartMarkup(country) {
  const { capital, name, population, flags, languages } = country;
  countryCardEl.innerHTML = /*html*/ `
  <img src="${flags.svg}" alt="Flag: ${name.common}">
    <h2>${name.common}</h2>
    <ul>
      <li>
        <span>Capital: </span>${capital}
      </li>
      <li>
        <span>Population: </span>${population}
      </li>
      <li>
        <span>Languages: </span>${languages}
      </li>
    </ul>
  `;
}

// name.official - полное имя страны
// capital - столица
// population - население
// flags.svg - ссылка на изображение флага
// languages - массив языков
