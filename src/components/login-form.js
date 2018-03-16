import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { login } from '../actions/auth';
import { required, isEmail } from "../validators";
import Input from './input';

export function LoginForm(props) {
  function onSubmit(values) {
    return props.dispatch(login(values.email, values.password));
  }

  let errorMessage;
  if (props.error) {
    errorMessage = <div className="message message-error">{props.error}</div>;
  }

  return (
    <form onSubmit={props.handleSubmit(values => onSubmit(values))}>
    {errorMessage}
      <label htmlFor="email">
        Email
        <Field component={Input} type="email" name="email" validate={[required, isEmail]}/>
      </label>
      <label htmlFor="password">
        Password <Field component={Input} type="password" name="password" validate={[required]}/>
      </label>
      <button type="submit">Log in</button>
    </form>
  );
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => {
    dispatch(focus('login', Object.keys(errors)[0]))
  }
})(LoginForm);
