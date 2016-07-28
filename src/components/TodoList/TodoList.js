import React, { Component, PropTypes } from 'react';
import Todo from '../Todo/Todo';
import styles from './TodoListStyle';
import { View } from 'react-native';

export default class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.string)
  }

  static defaultProps = {
    todos: []
  }

  render() {
    return (
      <View style={styles.TodoList}>
        {this.props.todos.map((text, index) =>
          <Todo text={text} key={index} />
        )}
      </View>
    );
  }
}
