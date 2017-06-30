import React, { Component, PureComponent } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import styles from './styles';

export default class MyApp5 extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('MyApp5', () => MyApp5);
