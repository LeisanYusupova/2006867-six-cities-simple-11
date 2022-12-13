import { City, ReviewType } from '../types/types';
import { OfferType } from '../types/types';
import { SortTypes } from '../const';
import { cities } from '../const';


export const formatDate = (date: string): string => {
  const d = new Date(date);
  const options: Intl.DateTimeFormatOptions | undefined = {
    year: 'numeric',
    month: 'long',
  };

  return d.toLocaleString('en-US', options);
};

export const calculateRating = (rating:number):number => Math.floor(rating) * 20;

export const getOffersByCity = (offers: OfferType[], city: City):OfferType[] => offers.filter((offer) => city.name === offer.city.name);

const sortLowToHigh = (offer1: OfferType, offer2: OfferType): number => offer1.price - offer2.price;
const sortHighToLow = (offer1: OfferType, offer2: OfferType) : number => offer2.price - offer1.price;
const sortByRating = (offer1: OfferType, offer2: OfferType): number => offer2.rating - offer1.rating;

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

export const getRandomCity = () => {
  const min = 0;
  const max = cities.length;
  const randomIndex = Math.floor(Math.random() * (max - min)) + min;
  return cities[randomIndex];
};

export const makeCapitalLetter = (value: string) => value.charAt(0).toUpperCase().concat(value.slice(1));

const sortDateDecriment = (a: ReviewType, b: ReviewType): number => {
  const reviewDate1 = +new Date(a.date);
  const reviewDate2 = +new Date(b.date);

  return Math.sign(reviewDate2 - reviewDate1);
};

export const sortReviews = (reviews: ReviewType[]): ReviewType[] => {
  const sortedReviews = [...reviews];

  return sortedReviews.sort(sortDateDecriment);
};


