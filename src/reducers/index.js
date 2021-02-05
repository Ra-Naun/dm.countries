import { combineReducers } from 'redux';
import { selectedCountryReducer } from './selectedCountry';
import { searchedCountriesReducer } from './searchedCountries';
import { favoriteCountriesReducer } from './favoriteCountries';
import { countriesCacheReducer } from '././countriesCache';

export const rootReducer = combineReducers({
  selectedCountry: selectedCountryReducer,
  searchedCountries: searchedCountriesReducer,
  favoriteCountries: favoriteCountriesReducer,
  countriesCache: countriesCacheReducer,
});
