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
    return (
      <div className="question">
        <Header />
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
  token: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Questions);
// gettokenapi
// getquestionsapi
