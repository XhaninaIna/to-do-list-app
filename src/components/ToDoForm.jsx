import React from "react";
import { useState } from "react";
export default function ToDoForm({ addTodo }) {
  const [values, setValues] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    addTodo(values);
    setValues("");
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="what is the task today"
        value={values}
        onChange={(e) => setValues(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
}
