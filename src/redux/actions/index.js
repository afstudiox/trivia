import getToken from '../../services/getToken';

export const SUCCESS = 'SUCCESS';
export const REQUEST = 'REQUEST';
export const ERROR = 'ERROR';

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

export const thunkGetToken = () => async (dispatch) => {
  dispatch(requestToken());
  try {
    const data = await getToken();
    dispatch(successToken(data));
  } catch (error) {
    dispatch(failedToken(error));
  }
};
