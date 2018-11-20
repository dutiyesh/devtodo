import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
  // If `true`, the component will be visible.
  active: PropTypes.bool.isRequired,
  // Callback fired on `click` event.
  onClick: PropTypes.func.isRequired,
};

function ClearCompletedTodosButton(props) {
  const { active, onClick } = props;

  const buttonClass = classnames('clear-button', {
    'is-active': active,
  });

  return (
    <div
      className={buttonClass}
      title="Clear completed"
      onClick={onClick}
      onKeyUp={onClick}
      role="button"
      tabIndex="0"
    />
  );
}

ClearCompletedTodosButton.propTypes = propTypes;

export default ClearCompletedTodosButton;
