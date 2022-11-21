import {createReducer} from '@reduxjs/toolkit';
import { changeCityAction, setOffersAction, sortOffersAction, loadOffersAction, setErrorAction, requireAuthorizationAction } from './action';
import { cities} from '../mock/cities';
import { OfferType } from '../types/types';
import { SortTypes, AuthorizationStatus } from '../const';


const initialState: {
  city: string;
  offers: OfferType[];
  sortType: SortTypes;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
} = {
  city: cities[0].name,
  offers: [],
  sortType: SortTypes.POPULAR,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.city = action.payload;
      state.sortType = SortTypes.POPULAR;
    })
    .addCase(setOffersAction, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(sortOffersAction, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(loadOffersAction, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setErrorAction, (state, action) => {
      state.error = action.payload;
    })
    .addCase(requireAuthorizationAction, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});
