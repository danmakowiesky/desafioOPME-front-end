import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import UserInfo from '../pages/UserInfo';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/userinfo/:username" exact component={UserInfo} />
    <Route path="/repositorios/:username" exact component={Repository} />
  </Switch>
);

export default Routes;
