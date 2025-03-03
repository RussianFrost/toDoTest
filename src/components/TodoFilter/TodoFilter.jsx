import React from "react";
import { FilterType } from "../../utils/filterTypes";
import "./TodoFilter.css";

const TodoFilter = ({ activeFilter, setActiveFilter }) => {
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className="todo-filter">
      <button
        className={`todo-filter-button all ${activeFilter === FilterType.ALL ? "active" : ""}`}
        onClick={() => handleFilterClick(FilterType.ALL)}
      >
        Все
      </button>
      <button
        className={`todo-filter-button completed ${activeFilter === FilterType.COMPLETED ? "active" : ""}`}
        onClick={() => handleFilterClick(FilterType.COMPLETED)}
      >
        Выполненные
      </button>
      <button
        className={`todo-filter-button incomplete ${activeFilter === FilterType.INCOMPLETE ? "active" : ""}`}
        onClick={() => handleFilterClick(FilterType.INCOMPLETE)}
      >
        Невыполненные
      </button>
    </div>
  );
};

export default TodoFilter;
