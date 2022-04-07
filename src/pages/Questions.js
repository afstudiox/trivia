import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { thunkGetQuestion, thunkGetToken } from '../redux/actions';
import Header from './Header';

class Questions extends Component {
  async componentDidMount() {
    const { token, thunkGetSaveQuestionsDispatch } = this.props;
    await thunkGetSaveQuestionsDispatch(token);
  }

  render() {
    console.log(questions);
    return (
      <div className="question">
        <Header />
        {
          questions
            .map((item, index) => (<p key={ index }>{item.incorrect_answers}</p>))

        }
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
};
export default connect(mapStateToProps, mapDispatchToProps)(Questions);
