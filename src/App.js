import React, { Component } from "react";
import Todo from "./components/ToDo";
import AddToDo from "./components/AddTodo";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "buy some milk" },
      { id: 2, content: "play mario kart" }
    ]
  };

  deleteToDo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos
    });
  };

  addToDo = todo => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  };
  render() {
    return (
      <div className="app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todo todos={this.state.todos} deleteToDo={this.deleteToDo} />
        <AddToDo addToDo={this.addToDo} />
      </div>
    );
  }
}
export default App;
