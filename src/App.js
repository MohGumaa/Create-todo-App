import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import Nav from "./components/layout/Nav";
import Contact from "./components/layout/Contact";
import About from "./components/layout/About";

function App() {
  const [todos, settodos] = useState([
    { id: 1, content: "Buy Food" },
    { id: 2, content: "Cook Food" },
  ]);

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    settodos(newTodos);
  };

  const addTodo = (content) => {
    const id = Math.random() * 10000;
    const newTodo = { id, content };
    // let newAddTods = [...todos, newTodo];
    // settodos(newAddTods);
    settodos((prev) => {
      return [...prev, newTodo];
    });
  };

  return (
    <Router>
      <div className="todo-app container">
        <Nav />
        <Route
          exact
          path="/"
          render={(props) => (
            <React.Fragment>
              <Todos todos={todos} deleteTodo={deleteTodo} />
              <AddTodo addTodo={addTodo} />
            </React.Fragment>
          )}
        />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
