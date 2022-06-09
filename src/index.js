import { debounce } from 'debounce';
import { fetchCountries } from './service/fetchCountries';
import './css/styles.css';

const DEBOUNCE_DELAY = 300;
const inputEl = document.querySelector('#search-box');

inputEl.addEventListener('input', debounce(textValue, DEBOUNCE_DELAY));

function textValue(e) {
  const inputValue = e.target.value.trim();
  if (inputValue === '') {
    return console.log('Не можна натискати на побіл');
  }
  console.log(inputValue);

  fetchCountries(inputValue)
    .then(country => {
      //   renderUser(user);
      console.log(country);
    })
    .catch(error => console.error(error));

//   e.currentTarget.reset();
}
