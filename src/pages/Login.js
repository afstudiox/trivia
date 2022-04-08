import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginHeader, thunkGetToken } from '../redux/actions';
import '../css/login.css';

import '../App.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
    };
  }

  handleDisable = () => {
    const { username, email } = this.state;
    const validEmail = /\w+@\w+\.\S+/g;
    return !(username.length && validEmail.test(email));
  }

  handleClick = async () => {
    const { thunkGetSaveTokenDispatch, history, loginSucess } = this.props;
    const { username, email } = this.state;
    await thunkGetSaveTokenDispatch();
    // retirei essa chamada de função abaixo do onclick
    await loginSucess(username, email);
    history.push('/questions');
  }

  render() {
    return (
      <div className="container">
        <div className="container-login col">
          <label htmlFor="username">
            Username:
            <input
              id="username"
              type="text"
              data-testid="input-player-name"
              onChange={ (event) => this.setState({ username: event.target.value }) }
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              id="email"
              type="email"
              data-testid="input-gravatar-email"
              onChange={ (event) => this.setState({ email: event.target.value }) }
            />
          </label>
          <Link to="/question" data-testid="button-start-quiz">
            <button
              type="button"
              data-testid="btn-play"
              disabled={ this.handleDisable() }
              onClick={ this.handleClick }
  
            >
              Play
            </button>
          </Link>
          <Link
            data-testid="btn-settings"
            to="/settings"
          >
            Configuraçôes
          </Link>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  thunkGetSaveTokenDispatch: () => dispatch(thunkGetToken()),
  loginSucess: (username, email) => dispatch(loginHeader(username, email)),
});

Login.propTypes = {
  thunkGetSaveTokenDispatch: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  loginSucess: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
