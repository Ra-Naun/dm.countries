import { combineReducers } from 'redux';
import { selectedCountryReducer } from './selectedCountry';
import { searchedCountriesReducer } from './searchedCountries';
import { favoriteCountriesReducer } from './FavoriteCountries';

export const rootReducer = combineReducers({ selectedCountry: selectedCountryReducer, SearchedCountries: searchedCountriesReducer, FavoriteCountries: favoriteCountriesReducer });
