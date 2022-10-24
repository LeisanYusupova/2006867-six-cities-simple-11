export type OfferType = {
  id: number;
  mark?: string;
  cardImage: string;
  price: number;
  cardName : string;
  cardType: string;
}


export const offers: OfferType[] = [{
  id: 1,
  mark: 'premium',
  cardImage: 'img/apartment-01.jpg',
  price: 120,
  cardName: 'Beautiful luxurious apartment at great location',
  cardType: 'Apartment',
},
{ id:2,
  cardImage: 'img/apartment-02.jpg',
  price: 120,
  cardName: 'Amazing rooom',
  cardType: 'Flat'
},
{ id: 3,
  mark: 'premium',
  cardImage: 'img/apartment-03.jpg',
  price: 100,
  cardName: 'Good place',
  cardType: 'Hostel'
},
{ id: 4,
  cardImage: 'img/apartment-01.jpg',
  price: 220,
  cardName: 'Nice place',
  cardType: 'Apartment'
}
];

