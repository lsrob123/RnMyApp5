import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';
import globalStyles from './styles';
import LoginContainerEmbedded from './containers/LoginContainerEmbedded';
import StatusContainerEmbedded from './containers/StatusContainerEmbedded';

export default class MyApp5 extends PureComponent {
    static navigatorButtons = {
        rightButtons: [
            {
                title: 'Some Page',
                id: 'somePage'
            }
        ]
    };

    constructor(props) {
        super(props);
        this
            .props
            .navigator
            .setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
        if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
            if (event.id == 'somePage') {
                // this is the same id field from the static navigatorButtons definition
                this
                    .props
                    .navigator
                    .push({screen: 'SomePage.SomePageContainer'})
            }
        }
    }

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
