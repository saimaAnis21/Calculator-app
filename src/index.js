import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import NavBar from './NavBar';

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <Routes />
  </React.StrictMode>,
  document.getElementById('root'),
);
