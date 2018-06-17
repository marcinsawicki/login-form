import React from 'react';
import PropTypes from 'prop-types';
import FormInput from './FormInput';

const Form = props => {
  return (
    <form onSubmit={props.formSubmit} className='login-form'>
      <fieldset>
        <FormInput
          isError={props.emailError}
          value={props.email}
          type='text'
          name='email'
          id='email'
          placeholder='email *'
          onFieldChange={props.onFieldChange}
        />
        <FormInput
          isError={props.passwordError}
          value={props.password}
          type='password'
          name='password'
          id='password'
          placeholder='password *'
          onFieldChange={props.onFieldChange}
        />
        <input className='login-form__field login-form__field--checkbox' type='checkbox' name='remember' id='remember' />
        <label className='login-form__label' htmlFor='remember'>Remember me</label>
      	<input className='login-form__field login-form__field--btn' type='submit' value='login' />
      </fieldset>
    </form>
  );
}

Form.propTypes = {
  email: PropTypes.string.isRequired,
  emailError: PropTypes.bool.isRequired,
  password: PropTypes.string.isRequired,
  passwordError: PropTypes.bool.isRequired,
  onFieldChange: PropTypes.func,
  formSubmit: PropTypes.func
};

export default Form;
