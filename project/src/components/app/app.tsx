import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import RoomPage from '../../pages/room-page/room-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {OfferType, City, ReviewType} from '../../types/types';
import {AppRoute} from '../../const';

type AppProps = {
  offers: OfferType[];
  city: City;
  reviews: ReviewType[];
}

function App({offers, city, reviews}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
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
              element={<RoomPage offers = {offers} reviews={reviews} city={city}/>}
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
