import { PUSH_FAVORITE_COUNTRY, REMOVE_FAVORITE_COUNTRY } from '../actions/actionTypes';

const initialState = [];

export const favoriteCountriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUSH_FAVORITE_COUNTRY:
      return [...state, ...action.payload];
    case REMOVE_FAVORITE_COUNTRY:
      return state.filter((countryCode) => countryCode !== action.payload);
    default:
      return state;
  }
};
