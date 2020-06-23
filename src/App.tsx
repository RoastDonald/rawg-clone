import React, { Component } from 'react';
import './App.css';
import { HomePage } from './pages/home/home.component';
import { Switch, Route } from 'react-router-dom';
import GamePage from './pages/game/game.component';

export default class extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/games/:slug" component={GamePage} />
        </Switch>
      </React.Fragment>
    );
  }
}
