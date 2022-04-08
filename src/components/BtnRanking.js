import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BtnRanking extends Component {
  render() {
    return (
      <div>
        <Link
          to="/ranking"
        >
          <button
            type="submit"
            data-testid="btn-ranking"
          >
            Ranking
          </button>
        </Link>
      </div>
    );
  }
}

export default BtnRanking;
