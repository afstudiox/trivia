import React, { Component } from 'react';
import { connect } from 'react-redux';
import { thunkGetToken } from '../redux/actions';
import Header from './Header';

class Questions extends Component {
  render() {
    return (
      <div className="question">
        <Header />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  thunkGetTokenDispatch: () => dispatch(thunkGetToken()),
});

export default connect(null, mapDispatchToProps)(Questions);
