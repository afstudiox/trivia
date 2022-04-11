import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import BtnRanking from '../components/BtnRanking';
import Header from '../components/Header';
import '../css/feedback.css';

class Feedback extends Component {
  componentDidMount() {
    this.saveScore();
  }

saveScore = () => {
  const { importScore } = this.props;
  // const obj = {
  //   score: importScore,
  //   assertions,
  // };
  const element = localStorage.setItem('score', JSON.parse(importScore));
  return element;
}

render() {
  const { importScore, assertions } = this.props;
  const minimumScore = 3;
  const message = importScore >= minimumScore ? 'Well Done!' : 'Could be better...';
  return (
    <div className="container-page">
      <header>
        <Header />
      </header>
      <div className="message-container" col>
        <h2 data-testid="feedback-text">{message}</h2>
        <p data-testid="feedback-total-score">
          Você acertou
          {' '}
          {importScore}
          {' '}
          questões!
        </p>
        <p data-testid="feedback-total-question">
          Um total de
          {' '}
          {assertions}
          {' '}
          pontos
        </p>
      </div>
      <BtnRanking />
    </div>
  );
}
}

const mapStateToProps = (state) => ({
  importScore: state.player.score,
  assertions: state.player.assertions,
});

Feedback.propTypes = {
  importScore: PropTypes.number.isRequired,
  assertions: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Feedback);
