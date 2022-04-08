const initialState = {
  name: '',
  assertions: '',
  score: 0,
  gravatarEmail: '',
};

const player = (state = initialState, action) => {
  switch (action.type) {
  case 'LOGIN':
    return {
      ...state,
      name: action.name,
      gravatarEmail: action.gravatarEmail,
    };
  case 'GET_SCORE':
    return {
      ...state,
      score: action.score,
    };
  default:
    return state;
  }
};

export default player;
