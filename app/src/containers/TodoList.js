import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TodoList from '../components/TodoList';
import { toggleTodo, updateTodo, removeTodo } from '../actionCreators/TodoList';
import { VISIBILITY_FILTERS } from '../constants';

function filterTodos(todos, filter) {
  switch (filter) {
    case VISIBILITY_FILTERS.SHOW_ALL:
      return todos;

    case VISIBILITY_FILTERS.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);

    case VISIBILITY_FILTERS.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);

    default:
      throw new Error(`Unknown filter: ${filter}`);
  }
}

function mapStateToProps(state) {
  const { todos, visibilityFilter } = state;

  return {
    todos: filterTodos(todos, visibilityFilter),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleTodo: bindActionCreators(toggleTodo, dispatch),
    updateTodo: bindActionCreators(updateTodo, dispatch),
    removeTodo: bindActionCreators(removeTodo, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
