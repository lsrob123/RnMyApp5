import React, { Component } from 'react'; 
import { StyleSheet } from 'react-native';

//export const styles = StyleSheet.create({
//module.exports = StyleSheet.create({
const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    padding: 10,
    color: 'white',
    backgroundColor: 'red'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  text: {
    textAlign: 'center',
    marginBottom: 5,
    color: 'yellow',
    padding: 10,
    backgroundColor: 'blue'
  },
});

export default {
  ...globalStyles
};