import React, {Component, PureComponent} from 'react';
import {Text, TextInput, View, Button, TouchableHighlight} from 'react-native';
import globalStyles from './styles';
import {createStore} from 'redux';

export default class LoginComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            name: props.username,
            password: props.password
        };
    }

    render() {
        return (
            <View>
                <Text>Username</Text>
                <TextInput placeholder={this.state.username}/>
                <Text>Username</Text>
                <TextInput placeholder={this.state.password}/>
                <TouchableHighlight>
                    <Text>Login</Text>
                </TouchableHighlight>
            </View>
        );
    }
}