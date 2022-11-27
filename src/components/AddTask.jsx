import { useState } from "react";

function AddTask({ add, showAddTask }) {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const newTask = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("enter message");
    } else {
      add({ text, day, reminder });
      setText("");
      setDay("");
      setReminder("");
    }
  };

  return (
    <form onSubmit={newTask} className={` ${showAddTask ? "show" : ""}`}>
      <div className="form-input">
        <label>Task</label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Add Task"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </div>
      <div className="form-input">
        <label>day and time</label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Add day and time "
          onChange={(e) => setDay(e.target.value)}
          value={day}
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
