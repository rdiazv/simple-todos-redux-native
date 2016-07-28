import React, { Component, PropTypes } from 'react';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';
import styles from './AppStyle';
import { connect } from 'react-redux';
import { addTodo } from '../../redux/todos';
import { View } from 'react-native';

class App extends Component {
  handleAdd = (text) => {
    console.log(text);
    this.props.dispatch(addTodo(text));
  }

  render() {
    return (
      <View style={styles.App}>
        <TodoForm onAdd={this.handleAdd} />
        <TodoList todos={this.props.allTodos} />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    allTodos: state
  };
}

export default connect(mapStateToProps)(App);
