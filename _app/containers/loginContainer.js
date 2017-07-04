import React, { Component, PureComponent } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions'; // import all actions, which will let this.props.doSomething(x) decide the chosen action

import LoginComponent from '../components/LoginComponent';


function mapStateToProps(globalState) {
  return {
    isLoggedIn: globalState.loginReducer.isLoggedIn,
  };
}

function mapDispatchtoProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchtoProps)(LoginComponent);

