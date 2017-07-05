import React, {Component, PureComponent} from 'react';
import {Text, TextInput, View} from 'react-native';
import Button from 'react-native-button';
import globalStyles from '../styles';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import SomePageComponent from '../components/SomePageComponent';

import * as actions from '../actions/actions'; // import all actions, which will let this.props.doSomething(x) decide the chosen action

function mapStateToProps(globalState) {
    return {info: globalState.doThingsReducer.info};
}

function mapDispatchtoProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

const somePageContainer = ({
    ...props
}) => (<SomePageComponent {...props}/>);
export default connect(mapStateToProps, mapDispatchtoProps)(somePageContainer);
