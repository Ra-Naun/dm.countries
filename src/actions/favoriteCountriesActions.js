import { PUSH_FAVORITE_COUNTRY, REMOVE_FAVORITE_COUNTRY } from './actionTypes';
import ActionsFactory from './ActionFactory';

export const pushFavCountryByCode = ActionsFactory(PUSH_FAVORITE_COUNTRY);

export const removeFavCountryByCode = ActionsFactory(REMOVE_FAVORITE_COUNTRY);
