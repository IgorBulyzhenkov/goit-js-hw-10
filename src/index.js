import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { debounce } from 'debounce';
import { getRefs } from './helpers/refs';
import { fetchCountries } from './service/fetchCountries';
import { getMarkup } from './template/markupCardCountry';
import { getCartMarkup } from './template/countriesMarkup';
import './css/styles.css';

const { inputEl, listEl } = getRefs();

const DEBOUNCE_DELAY = 300;

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
        return getMarkup(countries);
      }
      if (1 === countries.length) {
        getCartMarkup(countries[0]);
      }
    })
    .catch(error => Notify.failure('Oops, there is no country with that name'));
}
