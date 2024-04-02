import React from 'react';
import ReactDOM from 'react-dom';
import { legacy_createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import muiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './index.css';
import reducer from './reducers';
import EventsIndex from './components/events_index';
import EventsNew from './components/events_new';
import EventsShow from './components/events_show';
import reportWebVitals from './reportWebVitals';
import { MuiThemeProvider } from 'material-ui/styles';

const enhancer =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(thunk))
    : applyMiddleware(thunk);
const store = legacy_createStore(reducer, enhancer);
ReactDOM.render(
  <MuiThemeProvider>
    {' '}
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/events/new" element={<EventsNew />} />
          <Route path="/events/:id" element={<EventsShow />} />
          <Route exact path="/" element={<EventsIndex />} />
          <Route exact path="/events" element={<EventsIndex />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
reportWebVitals();
