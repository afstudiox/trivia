import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../App.css';
import loginHeader from '../redux/actions/index';

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

  render() {
    const { loginSucess } = this.props;
    const { username, email } = this.state;
    return (
      <div className="container col">
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
            onClick={ () => loginSucess(username, email) }
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
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginSucess: (username, email) => dispatch(loginHeader(username, email)),
});

Login.propTypes = {
  loginSucess: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
