import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Confetti from "react-confetti";
import {
  toggleTodo,
  deleteTodo,
  editTodo,
} from "../../redux/actions/todoActions";
import trashIcon from "../../assets/icons/trash-icon.svg";
import editIcon from "../../assets/icons/edit-icon.svg";
import "./TodoItem.css";

const TodoItem = ({ todo, setEditingTodoId }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.description);
  const [confetti, setConfetti] = useState(false);
  const dispatch = useDispatch();

  const formatDisplayDate = (creationDate) => {
    const date = new Date(creationDate);
    const today = new Date();
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    const formattedDate = date.toLocaleDateString("ru-RU", options);
    return date.toDateString() === today.toDateString()
      ? "Сегодня"
      : formattedDate;
  };

  const handleSaveEdit = () => {
    if (editText.trim()) {
      dispatch(editTodo(todo.id, editText));
    }
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setEditText(todo.description);
    setIsEditing(true);
  };

  const handleToggleTodo = () => {
    dispatch(toggleTodo(todo.id));
    if (!todo.completed) {
      setConfetti(true);
      setTimeout(() => setConfetti(false), 5000);
    }
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <div className="todo-item">
      {confetti && (
        <div className="confetti-wrapper">
          <Confetti
            numberOfPieces={150}
            recycle={false}
            colors={["#ff0000", "#00ff00", "#0000ff"]}
          />
        </div>
      )}
      <div className="todo-item-date">
        {formatDisplayDate(todo.creationDate)}
      </div>
      {isEditing ? (
        <input
          className="todo-item-edit-input"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleSaveEdit}
          onKeyPress={(e) => e.key === "Enter" && handleSaveEdit()}
          autoFocus
        />
      ) : (
        <div className="todo-item-content">
          <label className="todo-item-label">
            <input
              className="todo-item-checkbox"
              type="checkbox"
              checked={todo.completed}
              onChange={handleToggleTodo}
            />
            <span
              className="todo-item-text"
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
              onClick={handleEditClick}
            >
              {todo.description}
            </span>
          </label>
          <div className="todo-item-buttons">
            {!isEditing && (
              <button
                className="todo-item-edit-button"
                onClick={handleEditClick}
              >
                <img src={editIcon} alt="Delete" className="trash-icon" />
              </button>
            )}
            <button
              className="todo-item-delete-button"
              onClick={handleDeleteClick}
            >
              <img src={trashIcon} alt="Delete" className="trash-icon" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
