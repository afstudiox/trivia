import getAnswers from '../../services/getAnswers';
import getToken from '../../services/getToken';

export const SUCCESS = 'SUCCESS';
export const REQUEST = 'REQUEST';
export const ERROR = 'ERROR';
export const SUCCESS_QUESTIONS = 'SUCCESS_QUESTIONS';
export const GET_SCORE = 'GET_SCORE';

export const requestToken = () => ({
  type: 'REQUEST',
});

export const successToken = (data) => ({
  type: 'SUCCESS',
  data,
});

export const failedToken = (error) => ({
  type: 'ERROR',
  error,
});

export const loginHeader = (name, gravatarEmail) => ({
  type: 'LOGIN',
  name,
  gravatarEmail,
});

export const successQuestion = (questions) => ({
  type: 'SUCCESS_QUESTIONS',
  questions,
});

export const getScore = (score) => ({
  type: 'GET_SCORE',
  score,
});

export const thunkGetToken = () => async (dispatch) => {
  dispatch(requestToken());
  try {
    const data = await getToken();
    dispatch(successToken(data));
  } catch (error) {
    dispatch(failedToken(error));
  }
};

export const thunkGetQuestion = () => async (dispatch) => {
  dispatch(requestToken());
  try {
    const tokenForRequest = await getToken();
    const dataResults = await getAnswers(tokenForRequest.token);
    dispatch(successQuestion(dataResults.results));
  } catch (error) {
    dispatch(failedToken(error));
  }
};
