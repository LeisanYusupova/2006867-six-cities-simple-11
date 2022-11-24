import {createReducer} from '@reduxjs/toolkit';
import { changeCityAction, setOffersAction, sortOffersAction, loadOffersAction, setOffersLoadingStatus, setErrorAction, requireAuthorizationAction, loadReviewsAction, loadNearOffersAction } from './action';
import { cities} from '../mock/cities';
import { OfferType, ReviewType } from '../types/types';
import { SortTypes, AuthorizationStatus } from '../const';


const initialState: {
  city: string;
  offers: OfferType[];
  sortType: SortTypes;
  isOffersLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  comments: ReviewType[];
  nearOffers: OfferType[];
} = {
  city: cities[0].name,
  offers: [],
  sortType: SortTypes.POPULAR,
  isOffersLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  comments: [],
  nearOffers: []
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
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.isOffersLoading = action.payload;
    })
    .addCase(setErrorAction, (state, action) => {
      state.error = action.payload;
    })
    .addCase(requireAuthorizationAction, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(loadReviewsAction, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(loadNearOffersAction, (state, action) => {
      state.nearOffers = action.payload;
    });
});
