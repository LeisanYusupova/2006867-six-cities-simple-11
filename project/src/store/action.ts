import {createAction} from '@reduxjs/toolkit';
import {OfferType} from '../types/types';
import { SortTypes, AuthorizationStatus } from '../const';

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

export const loadOffersAction = createAction(
  'offers/loadOffers',
  (offers: OfferType[]) => ({
    payload: offers,
  })
);

export const setOffersLoadingStatus = createAction(
  'offers/loadingStatus',
  (isOffersLoading:boolean) => ({
    payload: isOffersLoading,
  })
);


export const requireAuthorizationAction = createAction(
  'user/requireAuthorization',
  (authorizationStatus: AuthorizationStatus) => ({
    payload: authorizationStatus,
  })
);

export const setErrorAction = createAction(
  'app/setError',
  (error: string | null) => ({
    payload: error,
  })
);
