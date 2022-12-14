import Header from "./components/Header";
import Tasks from "./components/Tasks";

import "./style.css";
import { useState } from "react";
import AddTask from "./components/AddTask";
import { Menu } from "./components/Menu";

function App() {
  const [tasks, setTask] = useState([
    {
      id: 1,
      text: "going with friends",
      day: "monday 3 octobre",
      reminder: false,
      done: false,
    },
    {
      id: 2,
      text: "shopping",
      day: "tuesday 20 octobre",
      reminder: false,
      done: false,
    },
    {
      id: 3,
      text: "workshops",
      day: "monday 10 december",
      reminder: false,
      done: false,
    },
    {
      id: 4,
      text: "study",
      day: "thusday 20 avril",
      reminder: false,
      done: false,
    },
  ]);
  const [showAddTask, setShowTask] = useState(false);
  const [name, setName] = useState("");
  //add task
  const addTask = (obj) => {
    let id = tasks[tasks.length - 1].id + 1;

    setTask([...tasks, { ...obj, id }]);
  };
  //task done
  let taskDone = (id) => {
    setTask(
      tasks.map((task) => {
        if (task.id === id) task.done = !task.done;
        return task;
      })
    );
  };
  //show tasks
  let showTasks = () => {
    setShowTask(!showAddTask);
  };

  //delete Task
  const deleteTask = (id) => {
    let l = tasks.filter((el) => {
      return el.id !== id;
    });
    setTask(l);
  };
  //reminder
  const changeReminder = (id) => {
    setTask(
      tasks.map((el) => {
        if (el.id === id) {
          el.reminder = !el.reminder;
        }
        return el;
      })
    );
    console.log(tasks);
  };
  return (
    <div className="container">
      <Menu setName={setName} name={name} />
      <div className={`todo  ${name === "" ? "hide" : ""}`}>
        <Header name={name} showTasks={showTasks} showAddTask={showAddTask} />
        <AddTask add={addTask} showAddTask={showAddTask} />
        {tasks.length > 0 ? (
          <Tasks
            taskp={tasks}
            deletep={deleteTask}
            remin={changeReminder}
            taskDone={taskDone}
          />
        ) : (
          <h5>nothing today</h5>
        )}
      </div>
    </div>
  );
}

export default App;
