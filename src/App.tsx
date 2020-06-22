import React, { Component } from 'react';
import { HomePage } from './pages/home/home.component';
import { Switch, Route } from 'react-router-dom';
import { Header } from './components/header/header.component';

export const App: React.FC<{}> = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route exact path="/login" component={LoginPage}/> */}
        {/* <Route exact path="/signup" component={SignUpPage}/> */}
      </Switch>
    </React.Fragment>
  );
};
