import {createReducer} from '@reduxjs/toolkit';
import { changeCityAction, setOffersAction } from './action';
import { cities} from '../mock/cities';
import { offers } from '../mock/offers';
import { OfferType } from '../types/types';


const initialState: {
  city: string;
  offers: OfferType[];
} = {
  city: cities[0].name,
  offers: offers,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffersAction, (state, action) => {
      state.offers = action.payload;
    });
});
