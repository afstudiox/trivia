import { ERROR, SUCCESS_QUESTIONS } from '../actions';

const initialState = [{
  type: '',
  difficulty: '',
  category: '',
  question: '',
  correct_answer: '',
  incorrect_answers: [],
}];

const questions = (state = initialState, action) => {
  switch (action.type) {
  case SUCCESS_QUESTIONS:
    return action.questions;

  case ERROR:
    return {
      ...state,
    };

  default:
    return state;
  }
};

export default questions;
