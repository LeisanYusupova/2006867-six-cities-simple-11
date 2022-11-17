import {createAction} from '@reduxjs/toolkit';
import {OfferType} from '../types/types';

export const changeCityAction = createAction(
  'offers/changeCity',
  (city: string) => ({
    payload: city,
  })
);

export const setOffersAction = createAction(
  'offers/setOffers',
  (offers: OfferType[]) => ({
    payload: offers,
  })
);

