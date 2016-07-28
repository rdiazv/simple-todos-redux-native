import React, { Component, PropTypes } from 'react';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';
import './App.sass';
import { connect } from 'react-redux';
import { addTodo } from '../../redux/todos';

class App extends Component {
  handleAdd = (text) => {
    console.log(text);
    this.props.dispatch(addTodo(text));
  }

  render() {
    return (
      <div className="App">
        <TodoForm onAdd={this.handleAdd} />
        <TodoList todos={this.props.allTodos} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    allTodos: state
  };
}

export default connect(mapStateToProps)(App);
