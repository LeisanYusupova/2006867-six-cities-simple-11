import { OfferType, City, ReviewType} from '../types/types';
import {name, date, internet, address, datatype, lorem} from 'faker';

export const makeFakeCity = (): City => ({
  name: address.cityName(),
  location: {
    latitude: Number(address.latitude()),
    longitude: Number(address.longitude()),
    zoom: 13,
  }
});

export const makeFakeOffer = (): OfferType => ({
  bedrooms: 5,
  city: makeFakeCity(),
  description: lorem.paragraph(),
  goods: ['TV', 'Breakfast'],
  host: {
    avatarUrl: internet.url(),
    id: datatype.number(),
    isPro: datatype.boolean(),
    name: name.title(),
  },
  id: datatype.number(),
  images: [internet.url(), internet.url()],
  isPremium: datatype.boolean(),
  location: {
    latitude: Number(address.latitude()),
    longitude: Number(address.longitude()),
    zoom: 10
  },
  maxAdults: 4,
  previewImage: internet.url(),
  price: datatype.number(),
  rating: 5,
  title: address.streetName(),
  type: 'hotel'
});

export const makeFakeOffers = () => {
  const offers: OfferType[] = [];
  for (let i = 0; i < 5; i++) {
    offers.push(makeFakeOffer());
  }

  return offers;
};

export const makeFakeComment = (): ReviewType => ({
  hotelId: datatype.number(),
  comment: lorem.paragraph(),
  date: date.recent().toDateString(),
  id: datatype.number(),
  rating: 5,
  user: {
    avatarUrl: internet.url(),
    id: datatype.number(),
    isPro: true,
    name: name.title(),
  },
});


export const makeFakeComments = (): ReviewType[] => {
  const comments: ReviewType[] = [];
  for (let i = 0; i < 3; i++) {
    comments.push(makeFakeComment());
  }

  return comments;
};

export const makeEmail = (): string => internet.email();
