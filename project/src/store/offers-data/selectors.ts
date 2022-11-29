import { OfferType } from '../../types/types';
import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getOffers = (state: State): OfferType[] => state[NameSpace.Offers].offers;
export const getOffersDataLoadingStatus = (state: State): boolean => state[NameSpace.Offers].isOffersDataLoading;
export const getNearOffers = (state: State): OfferType[] => state[NameSpace.Offers].nearOffers;
