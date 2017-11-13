import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShowCard from './ShowCard';
import preload from '../data.json';

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={props => <ShowCard quotes={preload.quotes} {...props} />} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
