import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import RoomPage from '../../pages/room-page/room-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {City, ReviewType} from '../../types/types';
import {AppRoute} from '../../const';
import {useAppSelector} from '../../hooks';

type AppProps = {
  city: City;
  reviews: ReviewType[];
}

function App({city, reviews}: AppProps): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
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
