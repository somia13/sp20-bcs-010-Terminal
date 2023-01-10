import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: props.completed
    };
  }

  handleChange = event => {
    this.setState({ completed: event.target.checked });
  };

  render() {
    return (
      <div>
        <input
          type="checkbox"
          checked={this.state.completed}
          onChange={this.handleChange}
        />
        <label>{this.props.content}</label>
      </div>
    );
  }
}

export default Todo;