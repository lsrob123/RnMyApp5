import React, { Component, PureComponent } from 'react';
import {Text, TextInput, View} from 'react-native';
import globalStyles from '../styles';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import StatusComponent from '../components/StatusComponent';

import * as actions from '../actions/actions'; // import all actions, which will let this.props.doSomething(x) decide the chosen action

function mapStateToProps(globalState) {
  return {
    info: globalState.doThingsReducer.info,
  };
}

function mapDispatchtoProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const statusContainerEmbedded = ({ ...props }) => (
  <StatusComponent {...props} />
);
export default connect(mapStateToProps, mapDispatchtoProps)(statusContainerEmbedded);