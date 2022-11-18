import Header from "./components/Header";
import Tasks from "./components/Tasks";
import "./style.css";
import { useState } from "react";

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
  //delete Task
  const deleteTask = (id) => {
    // let l = tasks.filter((el) => {
    //   return el.id !== id;
    // });
    // setTask(l);
    console.log("delete   " + id);
  };
  return (
    <div className="container">
      <Header name="Melek" />
      <Tasks taskp={tasks} deletep={deleteTask} />
    </div>
  );
}

export default App;
