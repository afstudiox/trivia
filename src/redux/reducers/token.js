import { ERROR, SUCCESS } from '../actions';

const initialState = '';

const token = (state = initialState, action) => {
  switch (action.type) {
  case SUCCESS:
    return action.data.token;

  case ERROR:
    return {
      ...state,
    };

  default:
    return state;
  }
};

export default token;
