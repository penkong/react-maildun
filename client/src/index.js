import 'normalize.css/normalize.css';
// import 'materialize-css/dist/css/materialize.min.css';
import './index.scss';
// import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';


import reducers from './reducers';

import App from './components/App';
// import axios from 'axios';// this way help dont use middlewares
// window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App/> 
  </Provider>
  , 
  document.querySelector('#root')
);
// serviceWorker.register(); 