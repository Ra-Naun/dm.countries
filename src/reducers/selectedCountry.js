import { SET_SELECTED_COUNTRY, RESET_SELECTED_COUNTRY } from '../actions/actionTypes';

const initialState = {
  code: null,
};

export const selectedCountryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_COUNTRY:
      return { code: action.payload };
    case RESET_SELECTED_COUNTRY:
      return initialState;
    default:
      return state;
  }
};
