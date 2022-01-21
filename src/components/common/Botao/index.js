import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function Botao({
  label, tipo, fullWidth, ...props
}) {
  return (
    <button
      className={`botao ${fullWidth ? 'fullWidth' : ''}`}
      // eslint-disable-next-line react/button-has-type
      type={tipo}
      {...props}
    >
      { label }
    </button>
  );
}

Botao.propTypes = {
  label: PropTypes.string.isRequired,
  tipo: PropTypes.string,
  fullWidth: PropTypes.bool,
};

Botao.defaultProps = {
  tipo: 'submit',
  fullWidth: false,
};

export default Botao;
