import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { cities } from './const';
import {Provider} from 'react-redux';
import { store } from './store';
import ErrorMessage from './components/error-message/error-message';
import { fetchOffersAction, checkAuthAction } from './store/api-actions';

store.dispatch(checkAuthAction());
store.dispatch(fetchOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App city = {cities[0]}/>
    </Provider>
  </React.StrictMode>,
);
