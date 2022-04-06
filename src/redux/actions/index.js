const loginHeader = (name, gravatarEmail) => ({
  type: 'LOGIN',
  name,
  gravatarEmail,
});

export default loginHeader;
