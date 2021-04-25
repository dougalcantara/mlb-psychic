import { Switch, Route } from 'react-router-dom';

import { AppContextProvider } from './store';

import AuthContainer from './containers/AuthContainer';

import AppHeader from './components/AppHeader';

import Home from './pages/Home';
import Login from './pages/Login';
import Schedule from './pages/Schedule';
import GameView from './pages/GameView';

import './App.css';

export default function App() {
  return (
    <div className="app">
      <AppContextProvider>
        <AuthContainer>
          <AppHeader />
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
        </AuthContainer>
      </AppContextProvider>
    </div>
  );
}
