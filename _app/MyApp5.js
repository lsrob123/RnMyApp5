import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';
import globalStyles from './styles';
import LoginComponent from './components/LoginComponent';
import StatusComponent from './components/StatusComponent';

export default class MyApp5 extends PureComponent {
    render() {
        return (
            <View style={globalStyles.container}>
                <Text style={globalStyles.welcome}>
                    Welcome to React Native!
                </Text>
                <LoginComponent
                    username="my username"
                    password="my password"
                    isLoggedIn={false}/>
                <StatusComponent info={'Initial state ...'}/>
            </View>
        );
    }
}
