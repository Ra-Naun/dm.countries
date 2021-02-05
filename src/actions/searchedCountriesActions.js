import { COUNTRIES_REQUEST, COUNTRIES_SUCCESS, COUNTRIES_FAIL, SET_FILTERS } from './actionTypes';
import { fetchContries, getOnlyUniqCountries, getStructuredListOfCountries, getSortedListOfCountries } from './utility';
import ActionsFactory from './ActionFactory';
import { updateCoutriesCach } from './CountriesCachActions';

const LoadCountriesRequest = ActionsFactory(COUNTRIES_REQUEST);
export const LoadCountriesSuccess = ActionsFactory(COUNTRIES_SUCCESS);
const LoadCountriesFail = ActionsFactory(COUNTRIES_FAIL);
export const setFilters = ActionsFactory(SET_FILTERS);

export const searchCountries = (requestText, filters) => {
  return async (dispatch) => {
    dispatch(LoadCountriesRequest());

    const countries = await loadContries(requestText, filters);

    if (countries.length > 0) {
      dispatch(updateCoutriesCach(countries));

      let onlyCodes = [];
      countries.forEach((country) => {
        onlyCodes.push({ code: country.code });
      });

      dispatch(LoadCountriesSuccess(onlyCodes));
    } else dispatch(LoadCountriesFail('Не удалось ничего найти...'));
  };
};

export const loadContries = async (requestText, filters) => {
  let countries = [];

  const URLByCode = 'https://restcountries.eu/rest/v2/alpha/';
  const countriesByCode = filters.byCode && (await fetchContries(URLByCode, requestText));
  countries = [...countries, ...(countriesByCode || [])];

  const URLByName = 'https://restcountries.eu/rest/v2/name/';
  const countriesByName = filters.byName && (await fetchContries(URLByName, requestText));
  countries = [...countries, ...(countriesByName[0] || [])];

  countries = getOnlyUniqCountries(countries);

  countries = getStructuredListOfCountries(countries);

  countries = getSortedListOfCountries(countries);
  return countries;
};
