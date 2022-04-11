import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import BtnRanking from '../components/BtnRanking';
import Header from '../components/Header';
// import './Questions.css';
import '../css/questions.css';
import { getScore, thunkGetQuestion, thunkGetToken } from '../redux/actions';

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // typeQuestion: '',
      // category: '',
      // dificult: '',
      // correctAnswer: '',
      // incorrectAnswer: [],
      index: 0,
      colorBorder: false,
      btnNext: false,
      loading: true,
      timer: 30,
      allCorrect: 0,
      buttonDisabledTimer: false,
      allAnswers: [],
    };
  }

  async componentDidMount() {
    const { token, thunkGetSaveQuestionsDispatch } = this.props;
    await thunkGetSaveQuestionsDispatch(token);
    this.setState({
      // typeQuestion: questions[0].type,
      // category: questions[0].category,
      // dificult: questions[0].difficulty,
      // correctAnswer: questions[0].correct_answer,
      // incorrectAnswer: questions[0].incorrect_answers,
      loading: false,
    });
    this.myTimer();
    this.questionsRender();
  }

  scoreBoard = (question, timer, difficulty) => {
    const { myScore, getScoreDispatch, questions } = this.props;
    const { allCorrect, index } = this.state;
    const correct = questions[index].correct_answer;
    const valueMax = 3;
    const pointsAdd = 10;
    let valueDifficulty = 0;
    if (difficulty === 'easy') valueDifficulty = 1;
    if (difficulty === 'medium') valueDifficulty = 2;
    if (difficulty === 'hard') valueDifficulty = valueMax;
    if (question === correct) {
      getScoreDispatch(myScore + pointsAdd + (timer * valueDifficulty), allCorrect + 1);
      // answerCorrect(allCorrect + 1);
    }
  }

  myTimer = async () => {
    const interval = 1000;
    const countdown = setInterval(() => {
      const { timer } = this.state;
      this.setState({
        timer: timer - 1,
      });
      if (timer === 1) {
        this.setState({
          buttonDisabledTimer: true,
        });
        clearInterval(countdown);
      }
    }, interval);
  };

  handleClick = ({ target }) => {
    // const { questions } = this.props;
    // const { index, timer } = this.state;
    // const level = questions[index].difficulty;
    this.setState({
      colorBorder: true,
      btnNext: true,
      // sortIndex: false,
    });
    // this.scoreBoard(value, timer, level);
    console.log(target.value);
  }

  handleNextQuestion = () => {
    const { questions, history } = this.props;
    const { index } = this.state;
    this.setState({
      index: index + 1,
      colorBorder: false,
      // sortIndex: true,
    });
    if (questions.length - 1 === index) {
      history.push('/feedback');
    }
    this.questionsRender();
  }

  questionsRender = () => {
    const { questions } = this.props;
    const { index } = this.state;
    const incorrect = questions[index].incorrect_answers;
    const correct = questions[index].correct_answer;
    this.setState({
      allAnswers: [...incorrect, correct],
      index: index + 1,
    });
  }

  render() {
    const { questions } = this.props;
    const { index, colorBorder,
      btnNext, loading, timer, buttonDisabledTimer, allAnswers } = this.state;
    /*     let allAnswers = [];
    allAnswers.push(correctAnswer, ...incorrectAnswer);
    let question;
    if (questions) {
      question = questions[index];
      const mg = 0.5;
      if (sortIndex) {
        allAnswers = [question.correct_answer, ...question
          .incorrect_answers].sort(() => Math.random() - mg);
      }
    } */

    return (
      <div className="container-page">
        <Header />
        {loading ? <h1>Carregando...</h1>
          : (
            <div className="container-questions-aswers row">
              <span>{timer}</span>
              <div className="container-question col">
                {/* troquei o elemento da categoria de p para h2 */}
                <h2 className="col" data-testid="question-category">
                  { questions[index].category }
                </h2>
                <p data-testid="question-text">
                  { questions[index].question }
                </p>
              </div>
              <div className="container-aswers col" data-testid="answer-options">
                {allAnswers.map((answer, indexOf) => (
                  <button
                    type="button"
                    disabled={ buttonDisabledTimer }
                    key={ indexOf }
                    className={ colorBorder && (
                      questions
                        .some((element) => element.correct_answer === answer)
                        ? 'green' : 'red') }
                    onClick={ this.handleClick }
                    data-testid={ questions
                      .some((element) => element
                        .correct_answer === answer) ? 'correct-answer' : 'wrong-answer' }
                  >
                    {answer}
                  </button>
                ))}
              </div>
              <div className="container-buttons col">
                <BtnRanking />
                <button
                  type="button"
                  className={ btnNext ? 'btn-next' : 'btn-next-disabled' }
                  disabled={ !btnNext }
                  onClick={ this.handleNextQuestion }
                  data-testid="btn-next"
                >
                  Next
                </button>
              </div>
            </div>
          )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.token,
  questions: state.questions,
  myScore: state.player.score,
});

const mapDispatchToProps = (dispatch) => ({
  thunkGetTokenDispatch: () => dispatch(thunkGetToken()),
  thunkGetSaveQuestionsDispatch: (questions) => dispatch(thunkGetQuestion(questions)),
  getScoreDispatch: (score) => dispatch(getScore(score)),
  // answerCorrect: (allCorrect) => dispatch(allCorrect),
});

Questions.propTypes = {
  thunkGetSaveQuestionsDispatch: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  questions: PropTypes.arrayOf(PropTypes.any).isRequired,
  category: PropTypes.string.isRequired,
  // difficulty: PropTypes.string.isRequired,
  getScoreDispatch: PropTypes.func.isRequired,
  // answerCorrect: PropTypes.func.isRequired,
  myScore: PropTypes.number.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Questions);
