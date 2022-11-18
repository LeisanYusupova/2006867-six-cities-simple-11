import {createReducer} from '@reduxjs/toolkit';
import { changeCityAction, setOffersAction, sortOffersAction } from './action';
import { cities} from '../mock/cities';
import { offers } from '../mock/offers';
import { OfferType } from '../types/types';
import { SortTypes } from '../const';


const initialState: {
  city: string;
  offers: OfferType[];
  sortType: string;
} = {
  city: cities[0].name,
  offers: offers,
  sortType: SortTypes.POPULAR
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
    });
});
