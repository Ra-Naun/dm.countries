import { UPDATE_CACHE } from './actionTypes';
import ActionsFactory from './ActionFactory';
import { loadContries } from './searchedCountriesActions';

export const updateCoutriesCach = ActionsFactory(UPDATE_CACHE);

export const lazzyLoadByCode = (code) => {
  return async (dispatch) => {
    const filters = {
      byName: false,
      byCode: true,
    };

    const newContries = await loadContries(code, filters);
    dispatch(updateCoutriesCach(newContries));
  };
};
