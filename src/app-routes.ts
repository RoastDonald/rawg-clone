import HomePage from './pages/home/home.component';
import GamePage from './pages/game/game.component';

export interface IRoute {
  path: string;
  name: string;
  Component: React.FC<{}>;
}

const routes: { [name: string]: IRoute } = {
  home: { path: '/', Component: HomePage, name: 'home' },
  games: { path: '/games/:slug', Component: GamePage, name: 'games' },
};

export default routes;
