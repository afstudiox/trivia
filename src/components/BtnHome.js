import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BtnHome extends Component {
  render() {
    return (
      <div>
        <Link
          to="/"
        >
          <button
            type="button"
            data-testid="btn-go-home"
          >
            Home
          </button>
        </Link>
      </div>
    );
  }
}

export default BtnHome;
