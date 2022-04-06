import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Settings from './pages/Settings';
import Questions from './pages/Questions';

function App() {
  return (
    <Switch>
      <Route exact path="/question" component={ Questions } />
      <Route exact path="/" component={ Login } />
      <Route exact path="/settings" component={ Settings } />
    </Switch>
  );
}

export default App;
