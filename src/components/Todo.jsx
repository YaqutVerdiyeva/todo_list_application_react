import React from "react";

const Todo = ({ todoList, setTodoList }) => {
  function deleteTodo(id) {
    return setTodoList(todoList.filter((el) => el.id != id));
  }
  return (
    <div>
      {todoList.map((el) => {
        return (
          <li key={el.id}>
            {el.todoName}
            <button onClick={() => deleteTodo(el.id)} className="delete-btn">
              Delete
            </button>
          </li>
        );
      })}
    </div>
  );
};

export default Todo;
