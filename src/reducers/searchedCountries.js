import { COUNTRIES_REQUEST, COUNTRIES_SUCCESS, COUNTRIES_FAIL, SET_FILTERS } from '../actions/actionTypes';

const initialState = {
  countries: [],
  filters: {
    byName: true,
    byCode: true,
  },
  isFetching: false,
  error: '',
};

// __country_structure__ = {
//   code: char(3),
//   name: string,
//   flag: img_src,
//   languages: [string],
//   border_countries: [code],
// };

export const searchedCountriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTRIES_REQUEST:
      return { ...state, isFetching: true };
    case COUNTRIES_SUCCESS:
      return { ...state, countries: action.payload, isFetching: false, error: '' };
    case COUNTRIES_FAIL:
      return { ...state, countries: [], isFetching: false, error: action.payload };
    case SET_FILTERS:
      return { ...state, filters: { ...state.filters, ...action.payload } };
    default:
      return state;
  }
};
