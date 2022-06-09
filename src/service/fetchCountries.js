const BASE_URL = 'https://restcountries.com';

export const fetchCountries = country => {
  return fetch(`${BASE_URL}/v3.1/name/${country}`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response.json();
    }
  );
};

//https://restcountries.com/v2/{service}?fields={field},{field},{field}
// name.official - полное имя страны
// capital - столица
// population - население
// flags.svg - ссылка на изображение флага
// languages - массив языков
