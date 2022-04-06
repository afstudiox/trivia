import getAnswers from '../../services/getAnswers';
import getToken from '../../services/getToken';

export const SUCCESS = 'SUCCESS';
export const REQUEST = 'REQUEST';
export const ERROR = 'ERROR';
export const SUCCESS_QUESTIONS = 'SUCCESS_QUESTIONS';

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

export const successQuestion = (data) => ({
  type: 'SUCCESS_QUESTIONS',
  data,
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
    const data = await getAnswers();
    dispatch(successQuestion(data));
  } catch (error) {
    dispatch(failedToken(error));
  }
};
