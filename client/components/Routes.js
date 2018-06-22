import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import TestPage from './pages/TestPage';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/test-page" component={TestPage} />
    </Switch>
  );
};

export default Routes;