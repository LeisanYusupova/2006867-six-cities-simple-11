import {OfferType} from '../../pages/mock/offers';

type CardInfoProps = {
  offer: OfferType;
}

function PlaceCard({offer}: CardInfoProps):
JSX.Element {
  const { id, mark, price, cardName, cardImage, cardType } = offer;
  return (

    <article className="cities__card place-card" id = {id.toString()}>
      <div className="place-card__mark">
        <span>{mark}</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={cardImage} width="260" height="200" alt="Place"/>
        </a>
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
          <a href="#">{cardName}</a>
        </h2>
        <p className="place-card__type">{cardType}</p>
      </div>
    </article>);
}

export default PlaceCard;