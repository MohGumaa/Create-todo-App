import React from "react";

function Todos({ todos, deleteTodo }) {
  const todosList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="collection-item" key={todo.id}>
          <span onClick={() => deleteTodo(todo.id)}>{todo.content}</span>
        </div>
      );
    })
  ) : (
    <p className="center">You have no todo's left, yay1</p>
  );
  return <div className="todos collection">{todosList}</div>;
}

export default Todos;
