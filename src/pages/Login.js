import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';

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
    const { history } = this.props;
    return (
      <div className="container col">
        <label htmlFor="username">
          Username
          <input
            id="username"
            type="text"
            data-testid="input-player-name"
            onChange={ (event) => this.setState({ username: event.target.value }) }
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            id="email"
            type="email"
            data-testid="input-gravatar-email"
            onChange={ (event) => this.setState({ email: event.target.value }) }
          />
        </label>
        <button
          type="button"
          data-testid="btn-play"
          disabled={ this.handleDisable() }
          onClick={ history.push('/questions') }
        >
          Play
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Login;
