import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import Nav from "./components/layout/Nav";
import Contact from "./components/layout/Contact";
import About from "./components/layout/About";
import Do from "./components/Do";

function App({ posts }) {
  console.log(posts);
  const [todos, settodos] = useState(posts);

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    settodos(newTodos);
  };

  const addTodo = (content) => {
    const id = Math.random() * 10000;
    const newTodo = { id, content };
    let newAddTods = [...todos, newTodo];
    settodos(newAddTods);
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
        <Route path="/:do_id" component={Do} />
      </div>
    </Router>
  );
}
const mapStateToPorps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToPorps)(App);
