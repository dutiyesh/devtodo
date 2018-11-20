import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  // Type of the input element. It should be a valid HTML5 input type.
  type: PropTypes.oneOf(['text']),
  // The short hint displayed in the input before the user enters a value.
  placeholder: PropTypes.string,
  // The input value, required for a controlled component.
  value: PropTypes.string,
  // The CSS class name of the input element.
  inputClass: PropTypes.string,
  // If `true`, the input will be disabled.
  disabled: PropTypes.bool,
  // Callback fired when the value is changed.
  onChange: PropTypes.func,
  // Callback fired when the Enter key is pressed.
  onEnter: PropTypes.func,
  // Callback fired when the Input element is focused out.
  onBlur: PropTypes.func,
};

const defaultProps = {
  type: 'text',
  placeholder: null,
  value: '',
  inputClass: null,
  disabled: false,
  onChange: null,
  onEnter: null,
  onBlur: null,
};

function Input(props) {
  function handleInputKeyDown(event) {
    const { onEnter } = props;

    if (event.keyCode === 13) {
      if (onEnter) {
        onEnter(event);
      }
    }
  }

  const {
    type,
    placeholder,
    value,
    inputClass,
    disabled,
    onChange,
    onBlur,
  } = props;

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      className={inputClass}
      disabled={disabled}
      onChange={onChange}
      onBlur={onBlur}
      onKeyDown={handleInputKeyDown}
    />
  );
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
