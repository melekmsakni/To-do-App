import Header from "./components/Header";
import Tasks from "./components/Tasks";

import "./style.css";
import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTask] = useState([
    {
      id: 1,
      text: "going with friends",
      day: "monday 3 octobre",
      reminder: false,
    },
    {
      id: 2,
      text: "shopping",
      day: "tuesday 20 octobre",
      reminder: false,
    },
    { id: 3, text: "workshops", day: "monday 10 december", reminder: false },
    { id: 4, text: "study", day: "thusday 20 avril", reminder: false },
  ]);
  const [showAddTask, setShowTask] = useState(false);
  //add task
  const addTask = (obj) => {
    let id = tasks.length + 1;
    let newTask = {
      id: id,
      text: obj.task,
      day: obj.dayTime,
      reminder: obj.reminder,
    };

    setTask([...tasks, newTask]);
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
      <Header name="Melek" showTasks={showTasks} showAddTask={showAddTask} />
      <AddTask add={addTask} showAddTask={showAddTask} />
      {tasks.length > 0 ? (
        <Tasks taskp={tasks} deletep={deleteTask} remin={changeReminder} />
      ) : (
        <h5>nothing today</h5>
      )}
    </div>
  );
}

export default App;
