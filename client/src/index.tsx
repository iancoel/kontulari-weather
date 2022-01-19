import { StylesProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Home from './components/Home';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <StylesProvider injectFirst>
        <Home />
      </StylesProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
