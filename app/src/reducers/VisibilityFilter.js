import {
  SET_VISIBILITY_FILTER,
} from '../actionTypes';

import {
  VISIBILITY_FILTERS,
} from '../constants';

const initialFilterState = VISIBILITY_FILTERS.SHOW_ALL;

function visibilityFilter(state = initialFilterState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;

    default:
      return state;
  }
}

export default visibilityFilter;
