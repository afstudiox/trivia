import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, name, score } = this.props;
    return (
      <div className="header">
        <img src={ `https://www.gravatar.com/avatar/${email}` } alt={ name } data-testid="header-profile-picture" />
        <p data-testid="header-player-name">{name}</p>
        <span data-testid="header-score">{score}</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.player.name,
  email: state.player.gravatarEmail,
  score: state.player.score,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
