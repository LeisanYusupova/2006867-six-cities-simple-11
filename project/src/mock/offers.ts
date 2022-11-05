import { OfferType, ReviewType} from '../types/types';


export const offers: OfferType[] = [
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 5
      },
      name: 'Amsterdam',
    },
    description: 'Nice city',
    goods: [
      'Wi-Fi',
      'Fridge',
      'Cabet TV',
      'Baby seat'
    ],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 1,
      isPro: false,
      name: 'Max',
    },
    id: 1,
    images: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg'
    ],
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 2
    },
    maxAdults: 2,
    previewImage: 'img/apartment-02.jpg',
    price: 500,
    rating: 4,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment'
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10
      },
      name: 'Amsterdam',
    },
    description: 'Nice city',
    goods: [
      'Wi-Fi',
      'Fridge',
      'Cabet TV',
      'Baby seat'
    ],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 1,
      isPro: false,
      name: 'Max',
    },
    id: 2,
    images: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg'
    ],
    isPremium: false,
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 10
    },
    maxAdults: 2,
    previewImage: 'img/apartment-03.jpg',
    price: 500,
    rating: 4,
    title: 'Wood and stone place',
    type: 'Private room'
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 10
      },
      name: 'Amsterdam',
    },
    description: 'Nice city',
    goods: [
      'Wi-Fi',
      'Fridge',
      'Cabet TV',
      'Baby seat'
    ],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 1,
      isPro: false,
      name: 'Max',
    },
    id: 3,
    images: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg'
    ],
    isPremium: true,
    location: {
      latitude: 52.3909553943508,
      longitude:  4.929309666406198,
      zoom: 10
    },
    maxAdults: 3,
    previewImage: 'img/room.jpg',
    price: 200,
    rating: 5,
    title: 'Beautiful luxurious apartment at great location',
    type: 'Apartmnet'
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 5
      },
      name: 'Amsterdam',
    },
    description: 'You can stay here for a long time',
    goods: [
      'Wi-Fi',
      'Fridge',
      'Cabet TV',
      'Baby seat'
    ],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 2,
      isPro: true,
      name: 'Polina',
    },
    id: 4,
    images: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg'
    ],
    isPremium: true,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 2
    },
    maxAdults: 2,
    previewImage: 'img/apartment-01.jpg',
    price: 500,
    rating: 4,
    title: 'Cozy Hotel',
    type: 'Hotel'
  }];

export const reviews: ReviewType[] = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: 'April 2019',
    hotelId: 1,
    id: 1,
    rating: 5,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 1,
      isPro: false,
      name: 'Max',
    }
  },
  {
    comment: 'Good place.',
    date: 'May 2019',
    id: 2,
    hotelId: 2,
    rating: 4,
    user: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 2,
      isPro: true,
      name: 'Angelina',
    }
  }];
