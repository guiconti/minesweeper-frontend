/* eslint-disable import/no-named-as-default */
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
import NotFound from './pages/NotFound';
import PropTypes from 'prop-types';
import React from 'react';
import { hot } from 'react-hot-loader';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/games/:id" component={Game} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
