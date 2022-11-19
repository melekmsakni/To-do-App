import React, { useState } from "react";
import { FaTimes, FaCheck } from "react-icons/fa";

function Task({ content, deletep, remin }) {
  const [done, setDone] = useState(false);
  let taskDone = () => {
    setDone(!done);
  };
  let style = "task";
  style += done ? " lineThrough" : "";
  style += content.reminder ? ` task-reminder` : ``;

  return (
    <div className={style} onDoubleClick={() => remin(content.id)}>
      <div className="txtcontent">
        <h4> {content.text} </h4>
        <div className="icons">
          <FaCheck
            className="tick"
            style={{ color: "green" }}
            onClick={taskDone}
          />
          <FaTimes
            style={{ color: "red" }}
            onClick={() => deletep(content.id)}
          />
        </div>
      </div>
      <p>{content.day}</p>
    </div>
  );
}

export default Task;
