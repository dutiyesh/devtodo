import { SYNC_TODO } from '../actionTypes';

function syncTodo(payload) {
  return {
    type: SYNC_TODO,
    payload,
  };
}

export default syncTodo;
