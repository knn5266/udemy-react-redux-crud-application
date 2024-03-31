import React from 'react';
import ReactDOM from 'react-dom';
import { legacy_createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';

import './index.css';
import Reducer from './reducers';
import EventsIndex from './components/events_index';
import reportWebVitals from './reportWebVitals';

const store = legacy_createStore(Reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <EventsIndex />
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();
