import React, { Component, PropTypes } from 'react';
import Todo from '../Todo/Todo';
import './TodoList.sass';

export default class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.string)
  }

  static defaultProps = {
    todos: []
  }

  render() {
    return (
      <ul className="TodoList">
        {this.props.todos.map((text, index) =>
          <Todo text={text} key={index} />
        )}
      </ul>
    );
  }
}
