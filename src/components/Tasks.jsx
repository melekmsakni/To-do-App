import Task from "./Task";

function Tasks({ taskp, deletep, remin, taskDone }) {
  return (
    <div className="tasks">
      {taskp.map((el, i) => {
        return (
          <Task
            key={el.id}
            content={el}
            deletep={deletep}
            remin={remin}
            taskDone={taskDone}
          />
        );
      })}
    </div>
  );
}

export default Tasks;
