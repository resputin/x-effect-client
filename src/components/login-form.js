import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { login } from '../actions/auth';
import { required, isEmail } from "../validators";

export function LoginForm(props) {
  function onSubmit(values) {
    return props.dispatch(login(values.email, values.password));
  }
  return (
    <form onSubmit={props.handleSubmit(values => onSubmit(values))}>
      <label htmlFor="email">
        Email
        <Field component="input" type="email" name="email" validate={[required, isEmail]}/>
      </label>
      <label htmlFor="password">
        Password <Field component="input" type="password" name="password" validate={[required]}/>
      </label>
      <button type="submit">Log in</button>
    </form>
  );
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('login', Object.keys(errors)[0]))
})(LoginForm);
