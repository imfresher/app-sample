import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import Error404 from '../views/errors/Error404';
import HomePage from '../views/frontend/HomePage';
import WatchPage from '../views/frontend/WatchPage';

class FrontendRoute extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/watch/:id" component={WatchPage} />

        {/* <Route component={Error404} /> */}
      </Switch>
    );
  }
}

export default FrontendRoute;
