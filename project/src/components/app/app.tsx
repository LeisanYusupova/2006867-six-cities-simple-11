import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import RoomPage from '../../pages/room-page/room-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {City, ReviewType} from '../../types/types';
import {AppRoute} from '../../const';
import {useAppSelector} from '../../hooks';
import LoadingScreen from '../loading-screen/loading-screen';
import ScrollToTop from '../scroll-to-top/scroll-to-top';

type AppProps = {
  city: City;
  reviews: ReviewType[];
}

function App({city, reviews}: AppProps): JSX.Element {
  const isOffersLoadingStatus = useAppSelector((state) => state.isOffersLoading);
  const offers = useAppSelector((state) => state.offers);
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
              element={<RoomPage city={city}/>}
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
