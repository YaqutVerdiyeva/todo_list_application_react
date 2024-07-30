import React from "react";
import Todo from "./Todo";

const TodoList = ({ todoList, setTodoList }) => {
  return (
    <div>
      <div className="tasks">
        <h2>Todo list</h2>
        <ul className="tasks-list">
          {todoList.length == 0 && "No todo :("}
          <Todo todoList={todoList} setTodoList={setTodoList} />
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
