import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { thunkGetQuestion, thunkGetToken } from '../redux/actions';
import Header from './Header';
import './Questions.css';

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // typeQuestion: '',
      // category: '',
      // dificult: '',
      correctAnswer: '',
      incorrectAnswer: [],
      index: 0,
      colorBorder: false,
    };
  }

  componentDidMount() {
    const { token, thunkGetSaveQuestionsDispatch, questions } = this.props;
    thunkGetSaveQuestionsDispatch(token);
    this.setState({
      // typeQuestion: questions[0].type,
      // category: questions[0].category,
      // dificult: questions[0].difficulty,
      correctAnswer: questions[0].correct_answer,
      incorrectAnswer: questions[0].incorrect_answers,
    });
  }

  handleClick = () => {
    this.setState({
      colorBorder: true,
    });
    /* this.validadeColor(); */
  }

  validadeColor = (allAnswers) => {
    const { colorBorder } = this.state;
    const { questions } = this.props;
    let bColor;
    if (colorBorder) {
      bColor = allAnswers
        .forEach((answer) => (questions
          .some((element) => element.correct_answer === answer) ? 'green' : 'red'));
    } else {
      bColor = 'option';
    }
    return bColor;
  }

  render() {
    const { questions } = this.props;
    const { correctAnswer, incorrectAnswer, index } = this.state;
    let allAnswers = [];
    allAnswers.push(correctAnswer, ...incorrectAnswer);
    console.log(allAnswers);
    let question;
    if (questions) {
      question = questions[index];
      const mg = 0.5;
      allAnswers = [question.correct_answer, ...question
        .incorrect_answers].sort(() => Math.random() - mg);
    }

    return (
      <div className="question">
        <Header />
        <div className="container-question">
          <p data-testid="question-category">
            { questions[0].category }
          </p>
          <p data-testid="question-text">
            { questions[0].question }
          </p>
        </div>
        <div className="container-options" data-testid="answer-options">
          {allAnswers.map((answer, indexOf) => (
            <button
              type="button"
              key={ indexOf }
              className={ this.validadeColor(allAnswers) }
              onClick={ this.handleClick }
              data-testid={ questions
                .some((element) => element
                  .correct_answer === answer) ? 'correct-answer' : 'wrong-answer' }
            >
              {answer}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.token,
  questions: state.questions,
});

const mapDispatchToProps = (dispatch) => ({
  thunkGetTokenDispatch: () => dispatch(thunkGetToken()),
  thunkGetSaveQuestionsDispatch: (questions) => dispatch(thunkGetQuestion(questions)),
});

Questions.propTypes = {
  thunkGetSaveQuestionsDispatch: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  questions: PropTypes.arrayOf(PropTypes.any).isRequired,
  category: PropTypes.string.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Questions);
