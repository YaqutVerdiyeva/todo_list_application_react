import { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("taskList")) || []
  );
  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  function addTask() {
    if (task) {
      setTaskList([
        ...taskList,
        {
          id: new Date(),
          taskName: task,
        },
      ]);
      setTask("");
    }
  }
  function deleteTask(id) {
    setTaskList(taskList.filter((el) => el.id !== id));
  }

  return (
    <>
      <div class="container">
        <div class="todoapp-section">
          <h1 class="heading">
            <p>Todo App</p>
          </h1>
          <div class="tasks">
            <h2>Tasks</h2>
            <ul class="tasks-list">
              {taskList.length == 0 && "No task :("}
              {taskList.map((el) => {
                return (
                  <li key={el.id}>
                    {el.taskName}{" "}
                    <button
                      className="delete-btn"
                      onClick={() => deleteTask(el.id)}
                    >
                      Delete
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div class="add-todo-section">
            <input
              class="task-input"
              type="text"
              onChange={(e) => setTask(e.target.value)}
              value={task}
              placeholder="Add task"
            />
            <button onClick={addTask} class="add-btn">
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
