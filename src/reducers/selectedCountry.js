import { SET_SELECTED_COUNTRY, RESET_SELECTED_COUNTRY } from '../actions/actionTypes';

const initialState = {
  code: null,
};

export const selectedCountryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_COUNTRY:
      return { ...state, code: action.payload };
    case RESET_SELECTED_COUNTRY:
      return { ...state, ...initialState };
    default:
      return state;
  }
};
