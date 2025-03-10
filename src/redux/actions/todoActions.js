export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const EDIT_TODO = "EDIT_TODO";

export const addTodo = (description) => ({
  type: ADD_TODO,
  payload: {
    id: Date.now(),
    description,
    completed: false,
    creationDate: new Date().toISOString(),
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const editTodo = (id, description) => ({
  type: EDIT_TODO,
  payload: { id, description },
});
