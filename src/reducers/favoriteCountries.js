import { PUSH_FAVORITE_COUNTRY, REMOVE_FAVORITE_COUNTRY } from '../actions/actionTypes';

const initialState = [];

// __country_structure__ = {
//   code: char(3),
// };

export const favoriteCountriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUSH_FAVORITE_COUNTRY:
      return [...state, { code: action.payload }];
    case REMOVE_FAVORITE_COUNTRY:
      return state.filter((country) => country.code !== action.payload);
    default:
      return state;
  }
};
