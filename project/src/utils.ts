import { City } from './types/types';
import { OfferType } from './types/types';
import { SortTypes } from './const';

export const calculateRating = (rating:number):number => Math.floor(rating) * 20;

export const getOffersByCity = (offers: OfferType[], city: City):OfferType[] => offers.filter((offer) => city.name === offer.city.name);

const sortLowToHigh = (offer1: OfferType, offer2: OfferType): number => offer1.price - offer2.price;
const sortHighToLow = (offer1: OfferType, offer2: OfferType) : number => offer2.price - offer1.price;
const sortByRating = (offer1: OfferType, offer2: OfferType): number => offer1.rating - offer2.rating;

export const sortOffers = (offers: OfferType[], type: string) => {
  switch(type) {
    case SortTypes.POPULAR:
      return offers;
    case SortTypes.HIGH:
      return offers.sort(sortHighToLow);
    case SortTypes.LOW:
      return offers.sort(sortLowToHigh);
    case SortTypes.TOP:
      return offers.sort(sortByRating);
    default:
      return offers;
  }
};
