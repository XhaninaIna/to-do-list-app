import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenSquare } from "@fortawesome/free-solid-svg-icons";
export default function ToDo({ task, toggleComplete, deleteToDo, editToDo }) {
  return (
    <div className="Todo">
      <p
        onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? "completed" : " "} `}
      >
        {task.task}
      </p>

      <div>
        <FontAwesomeIcon icon={faPenSquare} onClick={() => editToDo(task.id)} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteToDo(task.id)} />
      </div>
    </div>
  );
}
