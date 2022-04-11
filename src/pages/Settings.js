import React, { Component } from 'react';
import '../css/settings.css';

class Settings extends Component {
  render() {
    return (
      <div className="container-page">
        <div className="container-settings col">
          <h1 data-testid="settings-title">Configurações</h1>
          <label htmlFor="category">
            Categoria
            <select id="category">
              <option>option1</option>
              <option>option2</option>
              <option>option3</option>
            </select>
          </label>
          <label htmlFor="dificulty">
            Dificuldade
            <select id="dificulty">
              <option>option1</option>
              <option>option2</option>
              <option>option3</option>
            </select>
          </label>
          <label htmlFor="type">
            Tipo
            <select id="type">
              <option>option1</option>
              <option>option2</option>
              <option>option3</option>
            </select>
          </label>
        </div>
      </div>

    );
  }
}

export default Settings;
