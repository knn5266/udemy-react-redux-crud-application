import React from 'react';
import ReactDOM from 'react-dom';
import { legacy_createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css';
import Reducer from './reducers';
import EventsIndex from './components/events_index';
import EventsNew from './components/events_new';
import reportWebVitals from './reportWebVitals';

const store = legacy_createStore(Reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/events/new" Component={EventsNew} />
        <Route exact path="/" element={<EventsIndex></EventsIndex>}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();
