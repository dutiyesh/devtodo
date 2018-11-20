import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AddTodoForm from '../components/AddTodoForm';
import addTodo from '../actionCreators/AddTodoForm';

function mapDispatchToProps(dispatch) {
  return {
    addTodo: bindActionCreators(addTodo, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(AddTodoForm);
