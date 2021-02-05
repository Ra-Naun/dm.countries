import { fetchContries } from '../actions/utility';

export function getCountryByCode(state, code) {
  const cachedCountry = state.countriesCache.filter((country) => country.code === code)[0];

  if (cachedCountry) return cachedCountry;

  return { code, needLoaded: true };
}

export function getSelectedCountry(state) {
  const { code } = state.selectedCountry;
  const isExist = code ? true : false;
  if (isExist) {
    const country = getCountryByCode(state, code);

    const borders = country.border_countries.map((border) => {
      return getCountryByCode(state, border.code || border);
    });

    country.border_countries = borders;
    return country;
  } else return null;
}

export function getFavCountries(state) {
  const favCountriesOnlyCode = state.favoriteCountries;
  const favCountries = [];

  [].forEach.call(favCountriesOnlyCode, (code) => {
    const isExist = code ? false : true;
    if (isExist) {
      const country = getCountryByCode(state, code);
      favCountries.push(country);
    }
  });
  return favCountries;
}
export function searchedCountries(state) {
  const countryCodes = state.searchedCountries.countries;
  const countries = { ...state.searchedCountries };
  countries.countries = countryCodes.map((country) => getCountryByCode(state, country.code));
  return countries;
}

export function isFavorite(state, code) {
  const isExist = state.favoriteCountries.includes(code);
  return isExist;
  //don't add reselect!
}
