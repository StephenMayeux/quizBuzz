import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxLogger from 'redux-logger';
import reduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.render-target'));
