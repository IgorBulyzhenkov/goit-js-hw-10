const BASE_URL = 'https://restcountries.com';
const options = `?fields=name,capital,population,flags,languages`;

export const fetchCountries = country => {
  return fetch(`${BASE_URL}/v3.1/translation/${country}${options}`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response.json();
    }
  );
};
