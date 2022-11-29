import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import RoomPage from '../../pages/room-page/room-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {City} from '../../types/types';
import {AppRoute} from '../../const';
import {useAppSelector} from '../../hooks';
import LoadingScreen from '../loading-screen/loading-screen';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import {getOffers, getOffersDataLoadingStatus} from '../../store/offers-data/selectors';

type AppProps = {
  city: City;
}

function App({city}: AppProps): JSX.Element {
  const isOffersLoadingStatus = useAppSelector(getOffersDataLoadingStatus);
  const offers = useAppSelector(getOffers);
  if (isOffersLoadingStatus) {
    return (
      <LoadingScreen/>
    );
  }
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop/>
        <Routes>
          <Route
            index
            path={AppRoute.Root}
            element={<MainPage offers = {offers}/>}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage/>}
          />
          <Route path={AppRoute.Room}>
            <Route
              path={AppRoute.Id}
              element={<RoomPage/>}
            />
          </Route>

          <Route
            path='*'
            element={<NotFoundPage/>}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
