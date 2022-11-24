import Header from '../../components/header/header';
import ReviewList from '../../components/review-list/review-list';
import {Helmet} from 'react-helmet-async';
import { City} from '../../types/types';
import {useParams} from 'react-router-dom';
import NotFoundPage from '../not-found-page/not-found-page';
import Map from '../../components/map/map';
import { useAppSelector } from '../../hooks';
import {calculateRating} from '../../utils';
import {useEffect} from 'react';
import {store} from '../../store/index';
import {fetchCommentsAction, fetchNearOffersAction} from '../../store/api-actions';

type RoomOffer = {
  city: City;
}


function RoomPage({city}: RoomOffer): JSX.Element {
  const params = useParams();
  useEffect(() => {
    store.dispatch(fetchCommentsAction(Number(params.id)));
    store.dispatch(fetchNearOffersAction(Number(params.id)));
  },[params.id]);

  const offers = useAppSelector((state)=>state.offers);
  const nearPlaces = useAppSelector((state)=>state.nearOffers);
  const offer = offers.find((item) => item.id.toString() === params.id);
  if (!offer) {
    return (
      <NotFoundPage/>
    );
  }
  const {id, title, type, bedrooms, price, goods, images, isPremium, maxAdults, host, description, rating} = offer;
  const {isPro, name} = host;
  return (
    <div className="page">
      <Helmet>
        <title>Предложение</title>
      </Helmet>
      <div style={{ display: 'none' }}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
      </div>

      <Header/>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((image) => (
                <div className="property__image-wrapper" key={image}>
                  <img className="property__image" src={image} alt="Photo studio" />
                </div>)
              )}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium
                ?
                <div className="property__mark">
                  <span>Premium</span>
                </div>
                : '' }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${calculateRating(rating)}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} { bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}
                </li>
                <li className="property__feature property__feature--adults">
                Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((good) => (
                    <li className="property__inside-item" key={good}>
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74"alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {name}
                  </span>
                  {
                    isPro
                      ?
                      <span className="property__user-status">Pro</span>
                      : ''
                  }
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <ReviewList currentId={id}></ReviewList>
            </div>
          </div>
          <section className="property__map map">
            <Map points = {nearPlaces} activeCard = {offer} city = {city}></Map>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {nearPlaces.map((item) => (
                <article className="near-places__card place-card" key = {item.id}>
                  <div className="near-places__image-wrapper place-card__image-wrapper">
                    <a href="#">
                      <img className="place-card__image" src={item.previewImage} width="260" height="200" alt="Place" />
                    </a>
                  </div>
                  <div className="place-card__info">
                    <div className="place-card__price-wrapper">
                      <div className="place-card__price">
                        <b className="place-card__price-value">&euro;{item.price}</b>
                        <span className="place-card__price-text">&#47;&nbsp;night</span>
                      </div>
                    </div>
                    <div className="place-card__rating rating">
                      <div className="place-card__stars rating__stars">
                        <span style={{width: `${calculateRating(item.rating)}%`}}></span>
                        <span className="visually-hidden">Rating</span>
                      </div>
                    </div>
                    <h2 className="place-card__name">
                      <a href="#">{item.title}</a>
                    </h2>
                    <p className="place-card__type">{item.type}</p>
                  </div>
                </article>)
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default RoomPage;
