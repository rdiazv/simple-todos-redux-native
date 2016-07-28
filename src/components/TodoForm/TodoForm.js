import React, { Component, PropTypes } from 'react';
import styles from './TodoFormStyle';
import { TextInput } from 'react-native';

export default class TodoForm extends Component {
  static propTypes = {
    onAdd: PropTypes.func
  }

  state = {
    text: ''
  }

  handleChange = (text) => {
    this.setState({
      text: text
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
      <TextInput
        onSubmitEditing={this.handleSubmit}
        type="text"
        style={styles.TodoFormInput}
        placeholder="Todo..."
        value={this.state.text}
        onChangeText={this.handleChange}
        blurOnSubmit={false}
        returnKeyType="send"
      />
    );
  }
}
