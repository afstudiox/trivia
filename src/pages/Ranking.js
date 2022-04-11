import React, { Component } from 'react';
import BtnHome from '../components/BtnHome';
import '../css/ranking.css';

class Ranking extends Component {
  render() {
    return (
      <div className="container-page-ranking col">
        <h1 data-testid="ranking-title">Ranking</h1>
        <div className="container-ranking col">
          <div className="player row">
            <img src="" alt="img" />
            <p>Fulano 10 pontos</p>
          </div>
          <div className="player row">
            <img src="" alt="img" />
            <p>Cicrano 10 pontos</p>
          </div>
          <div className="player row">
            <img src="" alt="img" />
            <p>Beltrano 10 pontos</p>
          </div>
        </div>
        <BtnHome />
      </div>
    );
  }
}

export default Ranking;
