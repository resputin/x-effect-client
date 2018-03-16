import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { login } from '../actions/auth';

export function LoginForm(props) {
  function onSubmit(values) {
    return props.dispatch(login(values.email, values.password));
  }
  return (
    <form onSubmit={props.handleSubmit(values => onSubmit(values))}>
      <label htmlFor="email">
        Email
        <Field component="input" type="email" name="email" />
      </label>
      <label htmlFor="password">
        Password <Field component="input" type="password" name="password" />
      </label>
      <button type="submit">Log in</button>
    </form>
  );
}

export default reduxForm({
  form: 'login'
})(LoginForm);
