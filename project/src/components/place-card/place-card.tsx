import {OfferType} from '../../types/types';
import { Link } from 'react-router-dom';
import {makeCapitalLetter} from '../../utils/utils';
import {calculateRating} from '../../utils/utils';

type CardInfoProps = {
  offer: OfferType;
  onActiveChange: (offer: OfferType) =>void;
  fromActiveChange: ()=> void;
}

function PlaceCard({offer, onActiveChange, fromActiveChange}: CardInfoProps):
JSX.Element {
  const { id, isPremium, price, title, previewImage, type, rating} = offer;
  return (

    <article className="cities__card place-card" onMouseOver = {()=>onActiveChange(offer)} onMouseLeave = {()=>fromActiveChange()}>
      { isPremium
        ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
        : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to = {`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place"/>
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
            <span style = {{width: `${calculateRating(rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to = {`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{makeCapitalLetter(type)}</p>
      </div>
    </article>);
}

export default PlaceCard;
