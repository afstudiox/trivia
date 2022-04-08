import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Settings from './pages/Settings';
import Questions from './pages/Questions';
import Ranking from './pages/Ranking';

function App() {
  return (
    <Switch>
      <Route exact path="/questions" component={ Questions } />
      <Route exact path="/settings" component={ Settings } />
      <Route exact path="/ranking" component={ Ranking } />
      <Route exact path="/" component={ Login } />
    </Switch>
  );
}

export default App;
