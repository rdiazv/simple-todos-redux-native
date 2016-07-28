import React from 'react';
import App from './components/App/App';
import store from './redux/store';
import { Provider } from 'react-redux';

export default (
  <Provider store={store}>
    <App />
  </Provider>
);
