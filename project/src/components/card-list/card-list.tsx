import PlaceCard from '../place-card/place-card';
import {OfferType} from '../../mock/offers';

type CardListOffers = {
  offers: OfferType[];
}


function CardList({offers}: CardListOffers): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((item) => <PlaceCard offer={item} key={item.id}/>)}
    </div>
  );
}

export default CardList;
