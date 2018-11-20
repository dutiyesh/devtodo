import { ADD_TODO } from '../actionTypes';

function addTodo(text) {
  return {
    type: ADD_TODO,
    text,
  };
}

export default addTodo;
