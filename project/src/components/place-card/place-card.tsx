import {OfferType} from '../../mock/offers';
import {useState} from 'react';
import { Link } from 'react-router-dom';

type CardInfoProps = {
  offer: OfferType;
}

function PlaceCard({offer}: CardInfoProps):
JSX.Element {
  const { id, isPremium, price, cardName, cardImage, cardType } = offer;
  const [activeCard, setActiveCard] = useState(0);
  const mouseOverHandler = () => setActiveCard(offer.id);
  return (

    <article className="cities__card place-card" id = {id.toString()} onMouseOver = {mouseOverHandler}>
      { isPremium
        ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
        : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to = {`/offer/${activeCard}`}>
          <img className="place-card__image" src={cardImage} width="260" height="200" alt="Place"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style = {{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to = {`/offer/${activeCard}`}>{cardName}</Link>
        </h2>
        <p className="place-card__type">{cardType}</p>
      </div>
    </article>);
}

export default PlaceCard;
