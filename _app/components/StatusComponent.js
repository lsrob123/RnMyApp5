import React, {Component, PureComponent} from 'react';
import {Text, TextInput, View, Button, TouchableHighlight} from 'react-native';
import globalStyles from '../styles';

export default class StatusComponent extends PureComponent {
    state = {
        info: this.props.info
    };

    render(){
        return (
            <View>
                <Text>{this.state.info}</Text> 
            </View>
        );
    }
}