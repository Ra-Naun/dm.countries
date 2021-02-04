import { COUNTRIES_REQUEST, COUNTRIES_SUCCESS, COUNTRIES_FAIL } from './actionTypes';
import ActionsFactory from './ActionFactory';

const LoadCountriesRequest = ActionsFactory(COUNTRIES_REQUEST);
const LoadCountriesSuccess = ActionsFactory(COUNTRIES_SUCCESS);
const LoadCountriesFail = ActionsFactory(COUNTRIES_FAIL);

export const searchCountries = (requestText) => {
  return async (dispatch) => {
    LoadCountriesRequest();

    const countries = await loadCountries(requestText);
    console.log('~searchCountries: ', countries);

    LoadCountriesSuccess(countries);
  };
};

const loadCountries = (requestText) => {
  const __mock__ = [
    {
      code: 'RUS',
      name: 'Russia',
      flag: '',
      languages: ['russian'],
      border_countries: ['1', '2', '4', '3'],
    },
  ];

  return __mock__;
};
