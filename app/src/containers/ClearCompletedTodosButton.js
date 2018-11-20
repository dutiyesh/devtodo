import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ClearCompletedTodosButton from '../components/ClearCompletedTodosButton';
import { clearCompletedTodos } from '../actionCreators/TodoList';

function isAnyTodoComplete(todos) {
  const isComplete = todos.find(todo => todo.completed === true);

  if (isComplete) {
    return true;
  }

  return false;
}

function mapStateToProps(state) {
  const { todos } = state;

  return {
    active: isAnyTodoComplete(todos),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: bindActionCreators(clearCompletedTodos, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClearCompletedTodosButton);
