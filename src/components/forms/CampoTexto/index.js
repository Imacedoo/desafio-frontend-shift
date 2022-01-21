import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

// eslint-disable-next-line import/prefer-default-export
export const CampoTexto = React.forwardRef(({
  onChange, onBlur, name, error, type, placeholder, ...props
}, ref) => {
  const hasError = Object.keys(error).length > 0;

  return (
    <div className="campoTexto">
      <input
        className={hasError ? 'campoTexto__inputError' : 'campoTexto__input'}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        ref={ref}
        {...props}
      />
      {hasError && (
        <span className="campoTexto__mensagemErro">
          {error.message}
        </span>
      )}
    </div>
  );
});

CampoTexto.propTypes = {
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  error: PropTypes.object,
};

CampoTexto.defaultProps = {
  onChange: () => {},
  onBlur: () => {},
  type: 'text',
  placeholder: '',
  error: {},
};
