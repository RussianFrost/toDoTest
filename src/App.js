import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoFilter from "./components/TodoFilter/TodoFilter";
import TodoList from "./components/TodoList/TodoList";
import { FilterType } from "./utils/filterTypes";

const App = () => {
  const [activeFilter, setActiveFilter] = useState(FilterType.ALL);
  const [editingTodoId, setEditingTodoId] = useState(null);
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    savedTodos.forEach((todo) => dispatch({ type: "ADD_TODO", payload: todo }));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="app">
      <h1 className="app-title">Список дел</h1>
      <TodoInput
        editingTodoId={editingTodoId}
        setEditingTodoId={setEditingTodoId}
      />
      <TodoFilter
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <TodoList
        todos={todos}
        filter={activeFilter}
        setEditingTodoId={setEditingTodoId}
      />
    </div>
  );
};

export default App;
