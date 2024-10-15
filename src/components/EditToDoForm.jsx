import React from "react";
import { useState } from "react";
export default function EditToDoForm({ editToDo, task }) {
  const [values, setValues] = useState(task.task);
  function handleSubmit(e) {
    e.preventDefault();
    editToDo(values, task.id);
    setValues("");
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Update task"
        value={values}
        onChange={(e) => setValues(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Update task
      </button>
    </form>
  );
}
