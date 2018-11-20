import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Input from './Input';

const propTypes = {
  // Todo unique id.
  id: PropTypes.string.isRequired,
  // Todo text.
  text: PropTypes.string.isRequired,
  // If `true`, todo will be in completed state.
  completed: PropTypes.bool.isRequired,
  // Callback fired on todo checkbox toggle event.
  onToggle: PropTypes.func.isRequired,
  // Callback fired on todo text update event.
  onUpdate: PropTypes.func.isRequired,
  // Callback fired on todo remove event.
  onRemove: PropTypes.func.isRequired,
};

const TodoItem = React.memo((props) => {
  const [text, setText] = useState(props.text);
  // Maintain `editMode` state for synchronizing input field value
  // across multiple active tabs
  const [editMode, setEditMode] = useState(false);

  // Synchronize input field value when it's not in edit mode and
  // it's state value passed down from parent don't match
  // TODO: Find a better approach
  useEffect(() => {
    if (!editMode && props.text !== text) {
      setText(props.text);
    }
  });

  function handleInputChange(event) {
    setText(event.target.value);
    setEditMode(true);
  }

  function handleToggle() {
    const { id, onToggle } = props;

    if (onToggle) {
      onToggle(id);
    }
  }

  function handleRemove() {
    const { id, onRemove } = props;

    if (onRemove) {
      onRemove(id);
    }
  }

  function handleTodoUpdate() {
    const { id, onUpdate } = props;

    if (onUpdate) {
      onUpdate({
        id,
        text,
      });
    }

    setEditMode(false);
  }

  const todoItemClass = classnames('todo-item', {
    'is-complete': props.completed,
  });

  return (
    <div className={todoItemClass}>
      <div className="todo-item-checkbox-container">
        <input
          type="checkbox"
          className="todo-item-checkbox"
          checked={props.completed}
          onChange={handleToggle}
        />
      </div>
      <Input
        type="text"
        inputClass="todo-item-input"
        value={text}
        onChange={handleInputChange}
        onEnter={handleTodoUpdate}
        onBlur={handleTodoUpdate}
        disabled={props.completed}
      />
      <div
        className="todo-item-remove"
        onClick={handleRemove}
        onKeyUp={handleRemove}
        role="button"
        tabIndex="0"
      />
    </div>
  );
});

TodoItem.propTypes = propTypes;

export default TodoItem;
