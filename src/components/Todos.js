import React from "react";
import { Link } from "react-router-dom";
import Pokeball from "../pokeball.png";

function Todos({ todos, deleteTodo }) {
  console.log(todos, deleteTodo);
  const todosList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="post card" key={todo.id}>
          <img src={Pokeball} alt="todimage" />
          <div className="collection-item">
            <Link to={"/" + todo.id}>
              <span onClick={() => deleteTodo(todo.id)}>{todo.title}</span>
            </Link>
            <p>{todo.body}</p>
          </div>
        </div>
      );
    })
  ) : (
    <p className="center">You have no todo's left, yay1</p>
  );
  return <div className="todos collection home">{todosList}</div>;
}

export default Todos;
