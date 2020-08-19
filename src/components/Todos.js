import React from "react";
import { Link } from "react-router-dom";
import Pokeball from "../pokeball.png";

function Todos({ todos }) {
  const todosList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="post card" key={todo.id}>
          <img src={Pokeball} alt="todimage" />
          <div className="collection-item">
            <Link to={"/" + todo.id}>
              <span>{todo.title}</span>
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
