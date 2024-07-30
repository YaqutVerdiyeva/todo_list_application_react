import { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  function addTodo() {
    if (todo) {
      setTodoList([
        ...todoList,
        {
          todoName: todo,
          id: new Date(),
        },
      ]);
    }
    setTodo("");
  }
  return (
    <>
      <div className="container">
        <div className="todoapp-section">
          <h1 className="heading">
            <p>Todo App</p>
          </h1>
          <TodoList
            todo={todo}
            setTodo={setTodo}
            todoList={todoList}
            setTodoList={setTodoList}
          />
          <div className="add-todo-section">
            <input
              className="task-input"
              onChange={(e) => setTodo(e.target.value)}
              type="text"
              value={todo}
              placeholder="Add task"
            />
            <button className="add-btn" onClick={addTodo}>
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
