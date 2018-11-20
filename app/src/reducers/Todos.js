import {
  ADD_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
  REMOVE_TODO,
  CLEAR_COMPLETED_TODO,
} from '../actionTypes';

const initialTodosState = [];

function todos(state = initialTodosState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: (new Date().getTime() + Math.random()).toString(36),
          text: action.text,
          completed: false,
        },
      ];

    case TOGGLE_TODO: {
      const todosAfterToggle = state.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }

        return todo;
      });

      return todosAfterToggle;
    }

    case UPDATE_TODO: {
      const todosAfterUpdate = state.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            text: action.text,
          };
        }

        return todo;
      });

      return todosAfterUpdate;
    }

    case REMOVE_TODO: {
      const todosAfterRemove = state.filter(todo => todo.id !== action.id);

      return todosAfterRemove;
    }

    case CLEAR_COMPLETED_TODO: {
      const activeTodos = state.filter(todo => todo.completed === false);

      return activeTodos;
    }

    default:
      return state;
  }
}

export default todos;
