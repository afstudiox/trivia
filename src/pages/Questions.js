import React, { Component } from 'react';
import { connect } from 'react-redux';
import { thunkGetToken } from '../redux/actions';

class Questions extends Component {
  render() {
    return (
      <div>Questions</div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  thunkGetTokenDispatch: () => dispatch(thunkGetToken()),
});

export default connect(null, mapDispatchToProps)(Questions);
