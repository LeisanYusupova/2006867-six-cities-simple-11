
export type OfferType = {
  id: number;
  isPremium: boolean;
  cardImage: string;
  price: number;
  cardName : string;
  cardType: string;
  bedrooms: number;
  adults: number;
  images: string[];
  options: string[];
  host : {
    src: string;
    name: string;
    isPro: boolean;
  };
}

export type CommentsType = {
    comment: string;
    date: string;
    id: number;
    rating: number;
    user: {
      avatarUrl: string;
      id: number;
      isPro: boolean;
      name: string;
  };
};


export const offers: OfferType[] = [{
  id: 1,
  isPremium: true,
  cardImage: 'img/apartment-01.jpg',
  price: 120,
  cardName: 'Beautiful luxurious apartment at great location',
  cardType: 'Apartment',
  bedrooms: 3,
  adults: 4,
  images: [
    'img/apartment-01.jpg',
    'img/apartment-02.jpg',
    'img/apartment-03.jpg'
  ],
  options: [
    'Wi-Fi',
    'Washing machine',
    'Towels',
    'Heating'
  ],
  host: {
    src: 'img/avatar-angelina.jpg',
    name: 'Angelina',
    isPro: true
  }
},
{ id:2,
  cardImage: 'img/apartment-02.jpg',
  price: 120,
  isPremium: false,
  cardName: 'Amazing rooom',
  cardType: 'Flat',
  bedrooms: 3,
  adults: 3,
  images: [
    'img/apartment-01.jpg',
    'img/apartment-02.jpg',
    'img/apartment-03.jpg'
  ],
  options: [
    'Wi-Fi',
    'Fridge',
    'Cabet TV',
    'Baby seat'
  ],
  host: {
    src: 'img/avatar-max.jpg',
    name: 'Max',
    isPro: false
  }
},
{ id: 3,
  isPremium: true,
  cardImage: 'img/apartment-03.jpg',
  price: 100,
  cardName: 'Good place',
  cardType: 'Hostel',
  bedrooms: 2,
  adults: 5,
  images: [
    'img/apartment-01.jpg',
    'img/apartment-02.jpg',
    'img/apartment-03.jpg'
  ],
  options: [
    'Coffe machine',
    'Wi-Fi',
    'Baby seat'
  ],
  host: {
    src: 'img/avatar-angelina.jpg',
    name: 'Angelina',
    isPro: true
  }
},
{ id: 4,
  isPremium: false,
  cardImage: 'img/apartment-01.jpg',
  price: 220,
  cardName: 'Nice place',
  cardType: 'Apartment',
  bedrooms:1,
  adults: 3,
  images: [
    'img/apartment-01.jpg',
    'img/apartment-02.jpg',
    'img/apartment-03.jpg'
  ],
  options: [
    'Towels',
    'Wi-Fi',
    'Dishwasher'
  ],
  host: {
    src: 'img/avatar-max.jpg',
    name: 'Max',
    isPro: false
  }
}
];

export const comments: CommentsType[] = [{
  comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
  date: 'April 2019',
  id: 1,
  rating: 8,
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
  rating: 7,
  user: {
    avatarUrl: 'img/avatar-angelina.jpg',
    id: 2,
    isPro: true,
    name: 'Angelina',
  }
}];
