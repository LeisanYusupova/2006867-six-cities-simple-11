import CardList from '../../components/card-list/card-list';
import Header from '../../components/header/header';
import CitiesList from '../../components/cities-list/cities-list';
import NotFoundPlaces from '../../components/no-places-to-stay/no-places-to-stay';
import {OfferType} from '../../types/types';
import {Helmet} from 'react-helmet-async';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { changeCity } from '../../store/app-process/app-process';
import {cities} from '../../const';
import {sortOffers} from '../../utils';
import {useMemo} from 'react';
import {getCity, getSortType} from '../../store/app-process/selectors';
import {getOffers} from '../../store/offers-data/selectors';
import {City} from '../../types/types';


type MainPageProps = {
  offers: OfferType[];
}

function MainPage({offers}: MainPageProps): JSX.Element {
  const currentCityName = useAppSelector(getCity);
  const currentSortType = useAppSelector(getSortType);
  const offersByCity = useAppSelector(getOffers).filter((offer)=> offer.city.name === currentCityName);
  const sortedOffers:OfferType[] = useMemo(() => sortOffers(offersByCity, currentSortType), [offersByCity, currentSortType]);
  const dispatch = useAppDispatch();
  const handleCityChange = (city: string) => {
    dispatch(changeCity(city));
  };
  const cityName: City = cities.find((item) => item.name === currentCityName) || cities[0];

  return (
    <>
      <Helmet>
        <title>Главная страница</title>
      </Helmet>
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList selectedCity = {currentCityName} onCityChange = {handleCityChange}/>
        </div>
        {offers.length > 0
          ? <CardList offers={sortedOffers} city={cityName}/>
          : <NotFoundPlaces city={currentCityName}/>}
      </main>
    </>
  );
}

export default MainPage;
