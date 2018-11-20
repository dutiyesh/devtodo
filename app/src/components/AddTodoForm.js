import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Input from './Input';

const propTypes = {
  // Callback fired on form submit.
  addTodo: PropTypes.func.isRequired,
};

function AddTodoForm(props) {
  const [value, setValue] = useState('');

  function handleInputChange(event) {
    setValue(event.target.value);
  }

  function handleInputEnter() {
    if (value.length > 0) {
      const { addTodo } = props;

      if (addTodo) {
        addTodo(value);
      }

      setValue('');
    }
  }

  return (
    <div className="add-todo-form">
      <div className="add-todo-form-prefix">&#8250;</div>
      <Input
        type="text"
        placeholder="What needs to be done?"
        value={value}
        inputClass="add-todo-form-input"
        onChange={handleInputChange}
        onEnter={handleInputEnter}
      />
    </div>
  );
}

AddTodoForm.propTypes = propTypes;

export default AddTodoForm;
