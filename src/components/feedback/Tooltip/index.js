import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function Tooltip({ texto, children }) {
  return (
    <div className="tooltip" href="#">
      { children }
      <span className="tooltip__texto">
        { texto }
      </span>
    </div>
  );
}

Tooltip.propTypes = {
  texto: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Tooltip;
