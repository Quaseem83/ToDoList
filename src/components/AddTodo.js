import React, { Component } from "react";

export class AddToDo extends Component {
  state = {
    content: ""
  };

  handleChange = e => {
    this.setState({
      content: e.target.value
    });
  };

  handleSubmit = e => {
    console.log(this.state);
    this.props.addToDo(this.state);
    e.preventDefault();
    this.setState({
      content: ""
    });
  };
  render() {
    return (
      <div>
        <br />
        <form onSubmit={this.handleSubmit}>
          <label>Add New ToDo:</label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.content}
          />
        </form>
      </div>
    );
  }
}

export default AddToDo;
