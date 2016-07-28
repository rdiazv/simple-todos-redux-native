import React, { Component, PropTypes } from 'react';
import styles from './TodoStyle';
import { View, Text } from 'react-native';

export default class Todo extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired
  }

  render() {
    return (
      <View style={styles.Todo}>
        <Text>{this.props.text}</Text>
      </View>
    );
  }
}
