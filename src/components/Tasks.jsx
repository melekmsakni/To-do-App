import Task from "./Task";

function Tasks({ taskp , deletep }) {
  return (
    <div className="tasks">
      {taskp.map((el, i) => {
        return <Task key={el.id} content={el} deletep={deletep} />;
      })}
    </div>
  );
}

export default Tasks;
