import CardList from '../../components/card-list/card-list';
import Header from '../../components/header/header';
import CitiesList from '../../components/cities-list/cities-list';
import NotFoundPlaces from '../../components/no-places-to-stay/no-places-to-stay';
import {OfferType} from '../../types/types';
import {Helmet} from 'react-helmet-async';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import {changeCityAction} from '../../store/action';
import {cities} from '../../mock/cities';


type MainPageProps = {
  offers: OfferType[];
}

function MainPage({offers}: MainPageProps): JSX.Element {
  const currentCityName = useAppSelector((state) => state.city);
  const offersByCity = useAppSelector((state)=> state.offers.filter((offer)=> offer.city.name === currentCityName));
  const dispatch = useAppDispatch();
  const onCityChageHandler = (city: string) => {
    dispatch(changeCityAction(city));
  };
  const cityName = cities.find((item) => item.name === currentCityName) || cities[0];

  return (
    <body className="page page--gray page--main">
      <Helmet>
        <title>Главная страница</title>
      </Helmet>
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList selectedCity = {currentCityName} onCityChange = {onCityChageHandler}/>
        </div>
        {offers.length > 0
          ? <CardList offers={offersByCity} city={cityName}/>
          : <NotFoundPlaces city={currentCityName}/>}
      </main>
    </body>);
}

export default MainPage;
