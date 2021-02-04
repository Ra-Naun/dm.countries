import { SET_SELECTED_COUNTRY, RESET_SELECTED_COUNTRY } from './actionTypes';
import ActionsFactory from './ActionFactory';

export const setSelectedCountryByCode = ActionsFactory(SET_SELECTED_COUNTRY);

export const resetSelectedCountry = ActionsFactory(RESET_SELECTED_COUNTRY);
