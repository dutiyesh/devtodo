import { combineReducers } from 'redux';

import todos from './Todos';
import visibilityFilter from './VisibilityFilter';
import { SYNC_TODO } from '../actionTypes';

const appReducer = combineReducers({
  todos,
  visibilityFilter,
});

function rootReducer(state, action) {
  let rootState = state;

  if (action.type === SYNC_TODO) {
    rootState = action.payload;
  }

  return appReducer(rootState, action);
}

export default rootReducer;
