import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import TestPage from './pages/TestPage';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

import requireAuth from './requireAuth';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/test-page" component={requireAuth(TestPage)} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
    </Switch>
  );
};

export default Routes;
