import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

const TodoList = ({ todos, filter, setEditingTodoId }) => {
  const filterTodo = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "incomplete") return !todo.completed;
    return true;
  });

  return (
    <ul className="todo-list">
      {filterTodo.length === 0 ? (
        <div className="todo-list-empty">
          {filter === "completed"
            ? "Нет выполненных задач"
            : filter === "incomplete"
              ? "Нет невыполненных задач"
              : "Список дел пуст"}
        </div>
      ) : (
        filterTodo.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            setEditingTodoId={setEditingTodoId}
          />
        ))
      )}
    </ul>
  );
};

export default TodoList;
