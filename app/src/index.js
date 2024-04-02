import React from 'react';
import ReactDOM from 'react-dom';
import { legacy_createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';

import './index.css';
import reducer from './reducers';
import EventsIndex from './components/events_index';
import EventsNew from './components/events_new';
import reportWebVitals from './reportWebVitals';

const enhancer =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(thunk))
    : applyMiddleware(thunk);
const store = legacy_createStore(reducer, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/events/new" element={<EventsNew />} />
        <Route exact path="/" element={<EventsIndex />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();
