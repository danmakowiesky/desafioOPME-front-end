import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import UserInfo from '../pages/UserInfo';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/userinfo/:username" exact component={UserInfo} />
  </Switch>
);

export default Routes;
