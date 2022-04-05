import React from 'react';
import './App.css';
import logo from './trivia.png';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <p>
          Atualizando projeto. **PR CRIADO**
          Primeiro temos que dar um git checkout main-group-12.
          Após isso, vamos dar um git pull.
          Depois, vamos dar um git checkout -b main-group-12-req-XX.
          E podemos iniciar nossas alterações.
        </p>
      </header>
    </div>
  );
}
