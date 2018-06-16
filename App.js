import React, { Component } from 'react';
import {
  Platform,
} from 'react-native';
import Main from './src/Main/Main.js';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <Main />
    );
  }
}
