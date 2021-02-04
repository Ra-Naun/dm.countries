import { combineReducers } from 'redux';
import { selectedCountryReducer } from './selectedCountry';
import { searchedCountriesReducer } from './searchedCountries';
import { favoriteCountriesReducer } from './favoriteCountries';

export const rootReducer = combineReducers({ selectedCountry: selectedCountryReducer, searchedCountries: searchedCountriesReducer, favoriteCountries: favoriteCountriesReducer });
