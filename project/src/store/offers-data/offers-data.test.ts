import { OfferType } from '../../types/types';
import { fetchOffersAction, fetchNearOffersAction } from '../api-actions';
import {offersData} from './offers-data';
import {makeFakeOffers} from '../../utils/mock';

describe('Reducer: offers-data', () => {
  const newOffers = makeFakeOffers();
  const newNearOffers = makeFakeOffers();


  type OffersData = {
    isOffersDataLoading: boolean;
    offers: OfferType[];
    nearOffers: OfferType[];
  };

  let state: OffersData;
  beforeEach(() => {
    state = {
      isOffersDataLoading: false,
      offers: [],
      nearOffers: []
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(offersData.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  it('should change loading status to "True"', () => {
    expect(offersData.reducer(state, {type: fetchOffersAction.pending.type}))
      .toEqual({...state, isOffersDataLoading: true});
  });

  it('should update state after loading offers', () => {
    state = {...state, isOffersDataLoading: true};
    expect(offersData.reducer(state, {type: fetchOffersAction.fulfilled.type, payload: newOffers}))
      .toEqual({...state, isOffersDataLoading: false, offers: newOffers});
  });

  it('should update state after loading near offers', () => {
    state = {...state, offers: newOffers};
    expect(offersData.reducer(state, {type: fetchNearOffersAction.fulfilled.type, payload: newNearOffers}))
      .toEqual({...state, nearOffers: newNearOffers});
  });
});
