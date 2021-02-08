export function getCountryByCode(state, code) {
  const cachedCountry = state.countriesCache.find((country) => country.code === code);

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

  [].forEach.call(favCountriesOnlyCode, (country) => {
    const isExist = country.code ? true : false;
    if (isExist) {
      const CountryFullInfo = getCountryByCode(state, country.code);
      favCountries.push(CountryFullInfo);
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
  let isExist = false;
  state.favoriteCountries.forEach((country) => {
    if (country.code === code) isExist = true;
  });
  return isExist;
}
