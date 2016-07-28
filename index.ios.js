/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import client from './src/client';

class SimpleTodosReduxNative extends Component {
  render() {
    return client;
  }
}

AppRegistry.registerComponent('SimpleTodosReduxNative', () => SimpleTodosReduxNative);
