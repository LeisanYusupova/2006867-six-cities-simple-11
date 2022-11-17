import { City } from './types/types';
import { OfferType } from './types/types';

export const calculateRating = (rating:number):number => Math.floor(rating) * 20;

export const getOffersByCity = (offers: OfferType[], city: City):OfferType[] => offers.filter((offer) => city.name === offer.city.name);

