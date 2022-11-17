import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mock/offers';
import { reviews } from './mock/reviews';
import { cities } from './mock/cities';
import {Provider} from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);


root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App offers = {offers} city = {cities[0]} reviews={reviews}/>
  </Provider>
  // </React.StrictMode>,
);
