import React, { Component } from 'react'; 
import { StyleSheet } from 'react-native';

//export const styles = StyleSheet.create({
//module.exports = StyleSheet.create({
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    padding: 10,
    color: 'red',
    backgroundColor: 'green',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default {
  ...styles
};