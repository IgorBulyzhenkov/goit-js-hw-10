import { getRefs } from "../helpers/refs";

const { listEl, countryCardEl } = getRefs();


export function getMarkup(countries) {
  countryCardEl.innerHTML = '';
  const markup = countries
    .sort((a, b) => a.name.common.localeCompare(b.name.common))
    .map(
      ({ flags, name }) => /*html*/ `
       <li>
        <img src="${flags.svg}" alt="Flag: ${name.common}" width="50" >
        <p>${name.common}</p>
      </li>
  `
    )
    .join('');
  listEl.innerHTML = markup;
}
