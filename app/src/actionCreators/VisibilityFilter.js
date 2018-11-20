import { SET_VISIBILITY_FILTER } from '../actionTypes';

function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter,
  };
}

export default setVisibilityFilter;
