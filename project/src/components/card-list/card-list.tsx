import PlaceCard from '../place-card/place-card';
import {OfferType} from '../../mock/offers';
import {useState} from 'react';

type CardListOffers = {
  offers: OfferType[];
}


function CardList({offers}: CardListOffers): JSX.Element {
  const [, setActiveCard] = useState('');
  const handleActiveCard = (card: OfferType):void => {
    setActiveCard(card.id.toString());
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((item) => <PlaceCard offer={item} key={item.id} onActiveChange={handleActiveCard}/>)}
    </div>
  );
}

export default CardList;
