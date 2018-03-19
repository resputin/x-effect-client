import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { registerUser } from '../actions/users';
import { login } from '../actions/auth';
import {
  required,
  nonEmpty,
  matches,
  length,
  isTrimmed,
  isEmail
} from '../validators';
import Input from './input';
import './signup-form.css';
const passwordLength = length({ min: 8, max: 72 });
const matchesPassword = matches('password');

export function SignUpForm(props) {
  function onSubmit(values) {
    const { email, name, password } = values;
    const user = { email, name, password };
    return props
      .dispatch(registerUser(user))
      .then(() => props.dispatch(login(email, password)));
  }

  let errorMessage;
  if (props.error) {
    errorMessage = <div className="message message-error">{props.error}</div>;
  }

  return (
    <form
      onSubmit={props.handleSubmit(value => onSubmit(value))}
      className="signup-form"
    >
      {errorMessage}
      <Field
        component={Input}
        type="email"
        name="email"
        label="Email"
        validate={[required, nonEmpty, isTrimmed, isEmail]}
      />
      <Field
        component={Input}
        type="text"
        name="name"
        label="Name"
        validate={[required, nonEmpty, isTrimmed]}
      />
      <Field
        component={Input}
        type="password"
        name="password"
        label="Password"
        validate={[required, passwordLength, isTrimmed]}
      />
      <Field
        component={Input}
        type="password"
        name="passwordConfirmation"
        label="Confirm Password"
        validate={[required, nonEmpty, matchesPassword]}
      />
      <button type="submit" className="signup-button">
        Register
      </button>
    </form>
  );
}

export default reduxForm({
  form: 'signup',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('signup', Object.keys(errors)[0]))
})(SignUpForm);
