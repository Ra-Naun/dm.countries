import { UPDATE_CACHE } from '../actions/actionTypes';
import { getOnlyUniqCountries } from '../actions/utility';

const initialState = [];

// __country_structure__ = {
//   code: char(3),
//   name: string,
//   flag: img_src,
//   languages: [string],
//   border_countries: [code],
// };

export const countriesCacheReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CACHE: {
      const oldCache = state;
      const newCountries = action.payload;
      let countries = [...oldCache, ...newCountries];
      countries = getOnlyUniqCountries(countries);
      return [...countries];
    }
    default:
      return state;
  }
};
