import React, {Component, PureComponent} from 'react';
import {Text, TextInput, View} from 'react-native';
import globalStyles from '../styles';

export default class StatusComponent extends PureComponent {
    state = {
        info: this.props.info
    };

    componentWillReceiveProps(nextProps) {
        this.setState({info: nextProps.info});
    }

    render() {
        return (
            <View>
                <Text>{this.state.info}</Text>
            </View>
        );
    }
}