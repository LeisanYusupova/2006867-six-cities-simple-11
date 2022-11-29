import {createSlice} from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { OfferType } from '../../types/types';
import { fetchOffersAction, fetchNearOffersAction } from '../api-actions';

const initialState : {
  isOffersDataLoading: boolean;
  offers: OfferType[];
  nearOffers: OfferType[];
} = {
  isOffersDataLoading: false,
  offers: [],
  nearOffers: [],
};

export const offersData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchNearOffersAction.fulfilled, (state, action) => {
        state.nearOffers = action.payload;
      });
  }
});


