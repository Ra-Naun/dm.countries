import { COUNTRIES_REQUEST, COUNTRIES_SUCCESS, COUNTRIES_FAIL, SET_FILTERS } from './actionTypes';
import ActionsFactory from './ActionFactory';

const LoadCountriesRequest = ActionsFactory(COUNTRIES_REQUEST);
const LoadCountriesSuccess = ActionsFactory(COUNTRIES_SUCCESS);
const LoadCountriesFail = ActionsFactory(COUNTRIES_FAIL);
export const SetFilters = ActionsFactory(SET_FILTERS);

export const searchCountries = (requestText) => {
  return async (dispatch) => {
    dispatch(LoadCountriesRequest());

    let countries = [];

    const URLByCode = 'https://restcountries.eu/rest/v2/alpha/';
    const countriesByCode = await loadCountries(URLByCode, requestText);
    countries = [...countries, ...(countriesByCode || [])];

    const URLByName = 'https://restcountries.eu/rest/v2/name/';
    const countriesByName = await loadCountries(URLByName, requestText);
    countries = [...countries, ...(countriesByName[0] || [])];

    countries = getOnlyUniqCountries(countries);

    countries = getStructuredListOfCountries(countries);

    countries = getSortedListOfCountries(countries);

    if (countries.length > 0) dispatch(LoadCountriesSuccess(countries));
    else dispatch(LoadCountriesFail('Не удалось ничего найти...'));
  };
};

const loadCountries = async (URL, requestText) => {
  try {
    const responseJSON = await fetch(`${URL}${requestText}`);
    const countries = await responseJSON.json();

    if (countries.status === 400 || countries.status === 404) throw new Error(countries.message);
    return [countries];
  } catch (err) {
    console.log('error: ', err);
    return [];
  }
};

const getOnlyUniqCountries = (countries) => {
  const uniqCountries = [];
  countries.forEach((country) => {
    const code = country.alpha3Code;
    let isUniq = true;
    uniqCountries.forEach((uniqCountry) => {
      if (uniqCountry.alpha3Code === code) {
        isUniq = false;
      }
    });
    if (isUniq) uniqCountries.push(country);
  });

  return uniqCountries;
};

const getStructuredListOfCountries = (countries) => {
  const structuredCountries = [];
  countries.forEach((country) => {
    const structuredCountry = {
      code: country.alpha3Code,
      name: country.name,
      flag: country.flag,
      languages: country.languages,
      border_countries: country.borders,
    };
    structuredCountries.push(structuredCountry);
  });

  return structuredCountries;
};

const getSortedListOfCountries = (countries) => {
  const sortedCountries = [...countries];
  sortedCountries.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    else return 0;
  });

  return sortedCountries;
};
