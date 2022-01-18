import { StylesProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <StylesProvider injectFirst>
      <Home />
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
