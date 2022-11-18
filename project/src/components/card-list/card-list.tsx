import PlaceCard from '../place-card/place-card';
import SortingForm from '../sorting-form/sorting-form';
import {OfferType, City} from '../../types/types';
import {useState} from 'react';
import Map from '../map/map';

type CardListOffers = {
  offers: OfferType[];
  city: City;
}

function CardList({offers, city}: CardListOffers): JSX.Element {
  const [activeCard, setActiveCard] = useState<OfferType| undefined>(undefined);
  const handleActiveCard = (card: OfferType):void => {
    setActiveCard(card);
  };

  return (
    <div className="cities">
      <div className="cities__places-container container">

        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay in {city.name}</b>
          <SortingForm/>
          <div className="cities__places-list places__list tabs__content">
            {offers.map((item) => <PlaceCard offer={item} key={item.id} onActiveChange={handleActiveCard}/>)}
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map">
            <Map points= {offers} city = {city} activeCard={activeCard} ></Map>
          </section>
        </div>
      </div>
    </div>


  );
}

export default CardList;
