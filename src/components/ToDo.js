import React from "react";

const ToDo = ({ todos, deleteToDo }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span
            onClick={() => {
              deleteToDo(todo.id);
            }}
          >
            {todo.content}
          </span>
        </div>
      );
    })
  ) : (
    <p className="center">You have no tasks left! </p>
  );
  return <div className="todo collection">{todoList}</div>;
};

export default ToDo;
