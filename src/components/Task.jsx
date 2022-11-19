import React from "react";
import { FaTimes } from "react-icons/fa";

function Task({ content, deletep,remin }) {
  return (
    <div
      className={content.reminder ? "task task-reminder" : "task"}
      onDoubleClick={() => remin(content.id)}
    >
      <h4>
        {content.text}{" "}
        <FaTimes style={{ color: "red" }} onClick={() => deletep(content.id)} />
      </h4>
      <p>{content.day}</p>
    </div>
  );
}

export default Task;
