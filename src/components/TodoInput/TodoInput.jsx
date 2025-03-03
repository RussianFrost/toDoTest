import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, editTodo } from "../../redux/actions/todoActions";
import "./TodoInput.css";
import editIcon from "../../assets/icons/edit-icon.svg";

const TodoInput = ({ editingTodoId, setEditingTodoId, initialText = "" }) => {
  const [toDoText, setToDoText] = useState(initialText);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!toDoText.trim()) return;

    if (editingTodoId) {
      dispatch(editTodo(editingTodoId, toDoText));
      setEditingTodoId(null);
    } else {
      dispatch(addTodo(toDoText));
    }
    setToDoText("");
  };

  const handleInputChange = (e) => {
    setToDoText(e.target.value);
  };

  return (
    <form className="todo-input" onSubmit={handleSubmit}>
      <input
        className="todo-input-field"
        value={toDoText}
        onChange={handleInputChange}
        placeholder="Создать задачу"
        maxLength={200}
      />
      <button className="todo-input-button" type="submit">
        {editingTodoId ? `${<img src={editIcon}  alt='📝'/>}` : "+"}
      </button>
    </form>
  );
};

export default TodoInput;
