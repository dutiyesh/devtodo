import React from 'react';

import FilterItem from '../containers/FilterItem';
import ClearCompletedTodosButton from '../containers/ClearCompletedTodosButton';
import { VISIBILITY_FILTERS } from '../constants';

function VisibilityFilters() {
  return (
    <ul className="todo-filter-list">
      <li className="todo-filter-list-item">
        <FilterItem
          filter={VISIBILITY_FILTERS.SHOW_ALL}
          className="todo-filter-type"
        >
          All
        </FilterItem>
      </li>
      <li className="todo-filter-list-item">
        <FilterItem
          filter={VISIBILITY_FILTERS.SHOW_ACTIVE}
          className="todo-filter-type"
        >
          Active
        </FilterItem>
      </li>
      <li className="todo-filter-list-item">
        <FilterItem
          filter={VISIBILITY_FILTERS.SHOW_COMPLETED}
          className="todo-filter-type"
        >
          Completed
        </FilterItem>
        <ClearCompletedTodosButton />
      </li>
    </ul>
  );
}

export default VisibilityFilters;
