import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Schedule from './pages/Schedule';
import GameView from './pages/GameView';

import './App.css';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/schedule">
          <Schedule />
        </Route>
        <Route exact path="/game/:id">
          <GameView />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
