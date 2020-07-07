import React from 'react';
import HomePage from './pages/home/home.component';
import GamePage from './pages/game/game.component';
import { Switch, Route } from 'react-router-dom';

const App: React.FC<{}> = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route exact={true} path="/games" component={HomePage} />

        <Route path="/games/:slug" component={GamePage} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
