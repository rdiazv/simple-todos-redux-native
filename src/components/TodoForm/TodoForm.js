import React, { Component, PropTypes } from 'react';
import './TodoForm.sass';

export default class TodoForm extends Component {
  static propTypes = {
    onAdd: PropTypes.func
  }

  state = {
    text: ''
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.props.onAdd) {
      this.props.onAdd(this.state.text);
    }

    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="TodoFormInput"
          placeholder="Todo..."
          value={this.state.text}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
