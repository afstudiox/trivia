import { SUCCESS_QUESTIONS } from '../actions';

const initialState = {};

const questions = (state = initialState, action) => {
  switch (action.type) {
  case SUCCESS_QUESTIONS:
    return action.data.questions;
  default:
    return state;
  }
};

export default questions;
