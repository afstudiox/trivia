import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { thunkGetQuestion, thunkGetToken } from '../redux/actions';
import Header from './Header';

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeQuestion: '',
    };
  }

  async componentDidMount() {
    const { token, thunkGetSaveQuestionsDispatch, questions } = this.props;
    const { typeQuestion } = this.state;
    await thunkGetSaveQuestionsDispatch(token);
    this.setState({
      typeQuestion: questions[0].type,
    });
  }

  render() {
    const { questions } = this.props;
    console.log(questions);
    // const i = 0;
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
        {/* Renderizar as opções de respostas de acordo com o tipo (typeQuestion) */}
        <div className="container-options" data-testid="answer-options">
          <button type="button" data-test="correct-answer">
            Option
          </button>
          <button type="button" data-test={ `wrong-answer-${i}` }>
            Option
          </button>
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
};
export default connect(mapStateToProps, mapDispatchToProps)(Questions);
