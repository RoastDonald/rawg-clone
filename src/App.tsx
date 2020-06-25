import React, { Component } from 'react';
import './App.css';
import routes, { IRoute } from './app-routes';
import { Switch, Route } from 'react-router-dom';

export default class extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          {Object.values(routes).map(({ Component, path }, key) => (
            <Route exact path={path} key={key} component={Component} />
          ))}
        </Switch>
      </React.Fragment>
    );
  }
}
