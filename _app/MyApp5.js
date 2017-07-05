import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';
import globalStyles from './styles';
import LoginContainerEmbedded from './containers/LoginContainerEmbedded';
import StatusContainerEmbedded from './containers/StatusContainerEmbedded';

export default class MyApp5 extends PureComponent {
    render() {
        return (
            <View style={globalStyles.container}>
                <Text style={globalStyles.welcome}>
                    Welcome to React Native!
                </Text>
                <LoginContainerEmbedded
                    username="my username"
                    password="my password"
                    isLoggedIn={false}/>
                <StatusContainerEmbedded info={'Initial state ...'}/>
            </View>
        );
    }
}
