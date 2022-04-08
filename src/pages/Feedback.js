import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

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
    <div>
      <header>
        <Header />
      </header>
      <div className="message-container">
        <h1 data-testid="feedback-text">{message}</h1>
        <p data-testid="feedback-total-score">{importScore}</p>
        <p data-testid="feedback-total-question">{assertions}</p>
      </div>
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
