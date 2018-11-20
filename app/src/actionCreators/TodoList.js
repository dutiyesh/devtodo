import {
  TOGGLE_TODO,
  UPDATE_TODO,
  REMOVE_TODO,
  CLEAR_COMPLETED_TODO,
} from '../actionTypes';


// Add todo
export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id,
  };
}


// Update todo
function updateTodoData(id, text) {
  return {
    type: UPDATE_TODO,
    id,
    text,
  };
}


// Remove todo
export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id,
  };
}


export function updateTodo({ id, text }) {
  return (dispatch, getState) => {
    if (text.length === 0) {
      dispatch(removeTodo(id));
    } else {
      const storeTodoItem = getState().todos.find(todo => todo.id === id);

      if (storeTodoItem.text !== text) {
        dispatch(updateTodoData(id, text));
      }
    }
  };
}

// Remove completed todos
export function clearCompletedTodos() {
  return {
    type: CLEAR_COMPLETED_TODO,
  };
}
