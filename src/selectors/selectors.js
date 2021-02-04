export async function getCountryByCode(state, code) {
  const cachedCountry = state.searchedCountries.filter((country) => country.code === code)[0];
  if (cachedCountry) return cachedCountry;

  return null; //тут нужно сделать fetch
}

export function getSelectedCountry(state) {
  const { code } = state.selectedCountry;
  const isExist = code ? false : true;
  if (isExist) return getCountryByCode(state, code);
  else return null;
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

export function isFavorite(state, code) {
  const isExist = state.favoriteCountries.includes(code);
  return isExist;
}
