import React, {Component, PureComponent} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import globalStyles from '../styles';

export default class SomePageComponent extends PureComponent {
    state = {
        info: this.props.info
    };

    componentWillReceiveProps(nextProps) {
        this.setState({info: nextProps.info});
    }

    render() {
        return (
            <View style={somePageComponentStyles.container}>
                <Text style={somePageComponentStyles.text}>Some Page:&nbsp;{this.state.info}</Text>
            </View>
        );
    }
}

const somePageComponentStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#204080'
    },
    text: {
        textAlign: 'center',
        marginBottom: 5,
        color: 'red',
        padding: 5,
        backgroundColor: 'pink'
    }
});

