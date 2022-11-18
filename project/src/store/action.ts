import {createAction} from '@reduxjs/toolkit';
import {OfferType} from '../types/types';
import { SortTypes } from '../const';

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

export const sortOffersAction = createAction(
  'offers/sortOffers',
  (sortType: SortTypes ) => ({
    payload: sortType,
  })
);
