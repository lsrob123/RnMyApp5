import React, { Component, PureComponent } from 'react';
import {Text, TextInput, View} from 'react-native';
import Button from 'react-native-button';
import globalStyles from '../styles';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LoginComponent from '../components/LoginComponent';

import * as actions from '../actions/actions'; // import all actions, which will let this.props.doSomething(x) decide the chosen action

function mapStateToProps(globalState) {
  return {
    isLoggedIn: globalState.loginReducer.isLoggedIn,
  };
}

function mapDispatchtoProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const loginContainerEmbedded = ({ ...props }) => (
  <LoginComponent {...props} />
);
export default connect(mapStateToProps, mapDispatchtoProps)(loginContainerEmbedded);

