import React, {Component, PureComponent} from 'react';
import {Text, TextInput, View} from 'react-native';
import Button from 'react-native-button';
import globalStyles from '../styles';

export default class LoginComponent extends PureComponent {
    state = {
        username: this.props.username,
        password: this.props.password,
        isLoggedIn: this.props.isLoggedIn,
        nameAndPassword: ''
    };

    submit = () => {
        this.setState(previousState => {
            return {
                nameAndPassword: '<' + this.state.username + '>' + this.state.password
            };
        }, () => {
            console.log('nameAndPassword: ' + this.state.nameAndPassword);
            this
                .props
                .doThingA(this.state.nameAndPassword);
        });

    };

    render() {
        const {username, password, isLoggedIn} = this.state;
        return (
            <View>
                <Text>Username</Text>
                <TextInput
                    placeholder={'username'}
                    onChangeText={username => this.setState({username})}
                    value={this.state.username}/>
                <Text>Password</Text>
                <TextInput
                    placeholder={'password'}
                    onChangeText={password => this.setState({password})}
                    value={this.state.password}/>
                <Button
                    style={{
                    fontSize: 20,
                    color: 'green'
                }}
                    styleDisabled={{
                    color: 'red'
                }}
                    onPress={() => this.submit()}>
                    Submit
                </Button>
                <Text>{this.state.nameAndPassword}</Text>
            </View>
        );
    }
}
