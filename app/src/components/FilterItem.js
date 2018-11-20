import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
  // If `true`, the component will be in active state.
  active: PropTypes.bool.isRequired,
  // Override or extend the styles applied to the component.
  className: PropTypes.string,
  // The content of the component.
  children: PropTypes.node.isRequired,
  // Callback fired on `click` event.
  onClick: PropTypes.func.isRequired,
};

const defaultProps = {
  className: '',
};

function FilterItem(props) {
  const {
    active,
    className,
    children,
    onClick,
  } = props;

  const itemClass = classnames(className, {
    'is-active': active,
  });

  return (
    <div
      className={itemClass}
      onClick={onClick}
      onKeyUp={onClick}
      role="button"
      tabIndex="0"
    >
      {children}
    </div>
  );
}

FilterItem.propTypes = propTypes;
FilterItem.defaultProps = defaultProps;

export default FilterItem;
