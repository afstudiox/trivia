import md5 from 'crypto-js/md5';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/header.css';

class Header extends Component {
  render() {
    const { email, name, score } = this.props;
    const emailCrypto = md5(email).toString();
    return (
      <div className="header-container row">
        <img src={ `https://www.gravatar.com/avatar/${emailCrypto}` } alt={ name } data-testid="header-profile-picture" />
        {/* transformei o P do player em SPAN */}
        <div className="header-container-text row">
          <p>
            Jogador :
            {' '}
            <span data-testid="header-player-name">{name}</span>
          </p>
          <p>
            Pontos :
            {' '}
            <span data-testid="header-score">{score}</span>
          </p>
        </div>
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
