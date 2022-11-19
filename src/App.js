import Header from "./components/Header";
import Tasks from "./components/Tasks";

import "./style.css";
import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTask] = useState([
    {
      id: 1,
      text: "workshop salsa",
      day: "monday 3octobre",
      reminder: false,
    },
    {
      id: 2,
      text: "yuu",
      day: "monday",
      reminder: false,
    },
    { id: 3, text: "yuu", day: "monday", reminder: false },
    { id: 4, text: "yuu", day: "monday", reminder: false },
  ]);
  //add task
  const addTask = (obj) => {
    let newTask = {
      id: 1000,
      text: obj.task,
      day: obj.dayTime,
      reminder: obj.reminder,
    };
   
    setTask([...tasks, newTask]);
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
      <Header name="Melek" />
      <AddTask add={addTask} />
      {tasks.length > 0 ? (
        <Tasks taskp={tasks} deletep={deleteTask} remin={changeReminder} />
      ) : (
        <h2>nothing today</h2>
      )}
    </div>
  );
}

export default App;
