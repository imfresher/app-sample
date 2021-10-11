import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashBoardPage from '../views/backend/DashBoardPage';
import AdminUserPage from '../views/backend/AdminUserPage';

function BackendRoute(props) {
  return (
    <Switch>
      <Route exact path="/admin" component={DashBoardPage} />
      <Route path="/admin/users" component={AdminUserPage} />
    </Switch>
  );
}

export default BackendRoute;
