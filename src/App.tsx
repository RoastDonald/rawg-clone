import React, { Component } from 'react';
import './App.css';
import { HomePage } from './pages/home/home.component';
import { Switch, Route } from 'react-router-dom';
import { Header } from './components/header/header.component';

export default class extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>
      </React.Fragment>
    );
  }
}
