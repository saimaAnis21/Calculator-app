import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import Home from './Home';
import Quote from './Quote';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/App" component={App} />
      <Route exact path="/Quote" component={Quote} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
