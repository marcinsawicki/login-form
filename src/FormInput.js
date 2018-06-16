import React from 'react';
import PropTypes from 'prop-types';

const FormInput = props => {
  return (
    <div>
      <label className="login-form__label" htmlFor={props.name}>{props.name}</label>
      <input
        className={"login-form__field login-form__field--input " + ( props.isError ? "error" : "" ) }
        value={props.value}
        type={props.type}
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        onChange={props.onFieldChange.bind(this, props.name)}
      />
    </div>
  )
}

FormInput.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  isError: PropTypes.bool.isRequired,
  onChange: PropTypes.func
};

export default FormInput;
