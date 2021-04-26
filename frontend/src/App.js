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
          <div className="container mx-auto pt-4 max-w-80">
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
        </AuthContainer>
      </AppContextProvider>
    </div>
  );
}
