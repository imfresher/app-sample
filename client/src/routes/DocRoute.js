import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Lifecycle from '../doc/Lifecycle';

class DocRoute extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/doc" component={Lifecycle} />
      </Switch>
    );
  }
}

export default DocRoute;
