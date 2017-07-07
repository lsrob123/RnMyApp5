import React, {Component, PureComponent} from 'react';
import {Text, TextInput, View} from 'react-native';
import globalStyles from '../styles';

export default class StatusComponent extends PureComponent {
    state = {
        info: '(n/a)',
        info2: '(n/a)'
    };

    componentWillReceiveProps(nextProps) {
        this.setState({
            ...nextProps.doThingsReducer
        }, () => console.log(JSON.stringify(this.state)));
    }

    render() {
        return (
            <View>
                <Text>Info: {this.state.info}</Text>
                <Text>Info2: {this.state.info2}</Text>
            </View>
        );
    }
}