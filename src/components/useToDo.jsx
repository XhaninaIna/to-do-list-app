import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function useTodo() {
  const [todos, setTodos] = useState([]);

 
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) setTodos(storedTodos);
  }, []);

 
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo(task) {
    setTodos([
      ...todos,
      { id: uuidv4(), task, completed: false, isEditing: false },
    ]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function deleteToDo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function editToDo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  function editTask(task, id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  }

  return {
    todos,
    addTodo,
    toggleComplete,
    deleteToDo,
    editToDo,
    editTask,
  };
}
