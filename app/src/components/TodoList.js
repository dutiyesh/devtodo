import React from 'react';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';

const propTypes = {
  // Callback fired on todo checkbox toggle event.
  toggleTodo: PropTypes.func.isRequired,
  // Callback fired on todo text update event.
  updateTodo: PropTypes.func.isRequired,
  // Callback fired on todo remove event.
  removeTodo: PropTypes.func.isRequired,
};

function TodoList(props) {
  const {
    todos, toggleTodo, updateTodo, removeTodo,
  } = props;

  function renderList() {
    if (todos.length > 0) {
      const listItems = todos.map(todo => (
        <li key={todo.id} className="todo-list-item">
          <TodoItem
            {...todo}
            onToggle={toggleTodo}
            onUpdate={updateTodo}
            onRemove={removeTodo}
          />
        </li>
      ));

      return (
        <ul className="todo-list">
          {listItems}
        </ul>
      );
    }

    return null;
  }

  return renderList();
}

TodoList.propTypes = propTypes;

export default TodoList;
