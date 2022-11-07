import { ReviewType } from '../types/types';

export const reviews: ReviewType[] = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: 'April 2019',
    hotelId: 1,
    id: 1,
    rating: 4,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 1,
      isPro: false,
      name: 'Max',
    }
  },
  {
    comment: 'Location was great, canal tours near, central train was near walking distance to nearly everything we wanted to do!',
    date: 'May 2021',
    id: 2,
    hotelId: 2,
    rating: 3.2,
    user: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 2,
      isPro: true,
      name: 'Angelina',
    }
  },
  {
    comment: 'The rooms were nice, and they check us in early. The staff is very friendly and helpful. They have a small shop and do it your self pizza cooker. The locations is pretty good near the Opera house and metro.',
    date: 'October 2022',
    id: 3,
    hotelId: 3,
    rating: 4.6,
    user: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 3,
      isPro: true,
      name: 'Anna',
    }
  },
  {
    comment: 'Excellent location … perfect bed comfort after 12 flight hours, nice places to eat around there, canals in front , walking close to shopping, diner, etc….',
    date: 'March 2019',
    id: 4,
    hotelId: 4,
    rating: 3.6,
    user: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 5,
      isPro: true,
      name: 'Alex',
    }
  },
  {
    comment: 'Wow! The property is fantastic. Modern, spacious, beautiful rooms. Great location, the tram line is a block away. Easy walking everywhere. The breakfast area was the best! Definitely will book again!',
    date: 'June 2019',
    id: 5,
    hotelId: 1,
    rating: 4.1,
    user: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 6,
      isPro: true,
      name: 'Boris',
    }
  },
  {
    comment: 'The hotel had everything. The room was super clean, modern, and had good facilities. Breakfast was very nice and staff helpful. ',
    date: 'May 2022',
    id: 6,
    hotelId: 2,
    rating: 3.5,
    user: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 2,
      isPro: true,
      name: 'Kate',
    }
  }
];
