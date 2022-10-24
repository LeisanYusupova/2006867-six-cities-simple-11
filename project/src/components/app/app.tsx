import MainPage from '../../pages/main/main';
import {OfferType} from '../../pages/mock/offers';

type AppProps = {
  offers: OfferType[];
}

function App({offers}: AppProps): JSX.Element {
  return (
    <MainPage offers = {offers} />
  );
}

export default App;
