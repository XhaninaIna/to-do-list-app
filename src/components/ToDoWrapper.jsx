import React from "react";
import ToDoForm from "./ToDoForm";
import ToDo from "./ToDo";
import EditToDoForm from "./EditToDoForm";
import useTodo from "./useTodo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

export default function ToDoWrapper() {
  const {
    todos,
    addTodo,
    toggleComplete,
    deleteToDo,
    editToDo,
    editTask,
  } = useTodo();

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done!</h1>
      <FontAwesomeIcon
        icon={faList}
        style={{ color: "white", fontSize: "30px" }}
      />
      <ToDoForm addTodo={addTodo} />
      {todos?.map((todo, index) =>
        todo.isEditing ? (
          <EditToDoForm key={index} editTask={editTask} task={todo} />
        ) : (
          <ToDo
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteToDo={deleteToDo}
            editToDo={editToDo}
          />
        )
      )}
      {todos.length > 0 && (
        <p style={{ color: "white", fontStyle: "italic" }}>
          You have <strong>{todos.length}</strong> tasks for today
        </p>
      )}
    </div>
  );
}
