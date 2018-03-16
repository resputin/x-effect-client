import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { registerUser } from '../actions/users';
import { login } from '../actions/auth';
import { required, nonEmpty, matches, length, isTrimmed, isEmail } from '../validators';
import Input from './input';
const passwordLength = length({ min: 8, max: 72 });
const matchesPassword = matches('password');


export function SignUpForm(props) {
  function onSubmit(values) {
    const {email, name, password} = values;
    const user = {email, name, password};
    return props.dispatch(registerUser(user))
      .then(() => props.dispatch(login(email, password)))
  }

  let errorMessage;
  if (props.error) {
    errorMessage = <div className="message message-error">
        {props.error}
      </div>;
  }

  return <form onSubmit={props.handleSubmit(value => onSubmit(value))}>
      {errorMessage}
      <label htmlFor="email">
        Email
        <Field component={Input} type="email" name="email" validate={[required, nonEmpty, isTrimmed, isEmail]}/>
      </label>
      <label htmlFor="name">
        Name
        <Field component={Input} type="text" name="name" validate={[required, nonEmpty, isTrimmed]}/>
      </label>
      <label htmlFor="password">
        Password <Field component={Input} type="password" name="password" validate={[required, passwordLength, isTrimmed]}/>
      </label>
      <label htmlFor="password confirmation">
        Confirm Password <Field component={Input} type="password" name="passwordConfirmation" validate={[required, nonEmpty, matchesPassword]}/>
      </label>
      <button type="submit">Log in</button>
    </form>;
}

export default reduxForm({
  form: 'signup',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('signup', Object.keys(errors)[0]))
})(SignUpForm);
