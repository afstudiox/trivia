import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { thunkGetToken } from '../redux/actions';

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
    const { thunkGetSaveTokenDispatch, history } = this.props;
    await thunkGetSaveTokenDispatch();
    history.push('/questions');
  }

  render() {
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
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  thunkGetSaveTokenDispatch: () => dispatch(thunkGetToken()),
});

Login.propTypes = {
  thunkGetSaveTokenDispatch: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
