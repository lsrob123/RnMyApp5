import React, {Component, PureComponent} from 'react';
import {Text, TextInput, View, Button, TouchableHighlight} from 'react-native';
import globalStyles from '../styles';

export default class LoginComponent extends PureComponent {
    state = {
        name: this.props.username,
        password: this.props.password,
        isLoggedIn: this.props.isLoggedIn
    };

    render() {
        const {username, password, isLoggedIn} = this.state;
        return (
            <View>
                <Text>Username</Text>
                <TextInput placeholder={username}/>
                <Text>Username</Text>
                <TextInput placeholder={password}/>
                <TouchableHighlight>
                    <Text>Login</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
