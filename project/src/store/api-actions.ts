import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import { loadOffersAction, setErrorAction } from './action';
import { OfferType } from '../types/types';
import { APIRoute, TIMEOUT_SHOW_ERROR } from '../const';
import { store} from './index';

export const clearErrorAction = createAsyncThunk(
  'app/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setErrorAction(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);


export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<OfferType[]>(APIRoute.Offers);
    dispatch(loadOffersAction(data));
  },
);
