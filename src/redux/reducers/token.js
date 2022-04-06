import { REQUEST, SUCCESS, ERROR } from '../actions';

const initialState = '';

const token = (state = initialState, action) => {
  switch (action.type) {
  case REQUEST:
    return {
      ...state,
    };

  case SUCCESS:
    return action.data.token;

  case ERROR:
    return {
      ...state,
      error: action.data.response_message,
    };

  default:
    return state;
  }
};

export default token;
