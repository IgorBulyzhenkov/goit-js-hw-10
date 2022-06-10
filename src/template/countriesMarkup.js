import { getRefs } from "../helpers/refs";

const { listEl, countryCardEl } = getRefs();

export function getCartMarkup(country) {
  listEl.innerHTML = '';
  const { capital, name, population, flags, languages } = country;
  countryCardEl.innerHTML = /*html*/ `
  <div class="card">
    <img src="${flags.svg}" alt="Flag: ${name.common}" width="50">
    <h2>${name.common}</h2>
  </div>
    <ul>
      <li>
        <span>Capital: </span>${capital}
      </li>
      <li>
        <span>Population: </span>${population}
      </li>
      <li>
        <span>Languages: </span>${Object.values(languages).join(', ')}
      </li>
    </ul>
  `;
}
