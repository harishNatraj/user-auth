import React from 'react';
import Auth from '../src/screens/auth';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SignIn from '../src/screens/sign-in';
import SignUp from '../src/screens/sign-up';
import Dashboard from '../src/screens/dashboard';

function Routes () {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={SignIn} />
          <Route path='/sign-in' component={SignIn} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/dashboard' component={Auth(Dashboard)} />
        </Switch>
      </Router>
    );
};

export default Routes;

