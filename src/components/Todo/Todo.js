import React, { Component, PropTypes } from 'react';
import './Todo.sass';

export default class Todo extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired
  }

  render() {
    return (
      <li className="Todo">
        {this.props.text}
      </li>
    );
  }
}
