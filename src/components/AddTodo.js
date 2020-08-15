import React, { useState } from "react";

function AddTodo({ addTodo }) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Add new todo:</label>
        <input type="text" value={text} onChange={handleChange} />
      </form>
    </div>
  );
}

export default AddTodo;
