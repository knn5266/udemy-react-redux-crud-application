import React from 'react';
import ReactDOM from 'react-dom';
import { legacy_createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import Reducer from './reducers';
import App from './component/App';
import reportWebVitals from './reportWebVitals';

const store = legacy_createStore(Reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();
