import React, { Component } from 'react';
import routes, { IRoute } from './app-routes';
import { Switch, Route } from 'react-router-dom';

const App: React.FC<{}> = () => (
  <React.Fragment>
    <Switch>
      {Object.values(routes).map(({ Component, path }, key) => (
        <Route exact path={path} key={key} component={Component} />
      ))}
    </Switch>
  </React.Fragment>
);

export default App;
