import { useState } from "react";

function AddTask({ add }) {
  const [task, setTask] = useState("");
  const [dayTime, setdayTime] = useState("");
  const [reminder, setReminder] = useState(false);

  const newTask = (e) => {
    e.preventDefault();
    if (task === "") {
      alert("enter message");
    } else {
      add({ task, dayTime, reminder });
      setTask("");
      setdayTime("");
      setReminder("");
    }
  };

  return (
    <form onSubmit={newTask}>
      <div className="form-input">
        <label>Task</label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Add Task"
          onChange={(e) => setTask(e.target.value)}
          value={task}
        />
      </div>
      <div className="form-input">
        <label>day and time</label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Add day and time "
          onChange={(e) => setdayTime(e.target.value)}
          value={dayTime}
        />
      </div>
      <div className="form-input">
        <label>set reminder</label>
        <input
          type="checkbox"
          name=""
          id=""
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="Save Task" />
    </form>
  );
}

export default AddTask;
