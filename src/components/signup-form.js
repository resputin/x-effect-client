import React from 'react';
import { Field, reduxForm } from 'redux-form';

export function SignUpForm(props) {
  return <form onSubmit={props.handleSubmit(value => props.onSubmit(value))}>
      <label htmlFor="email">
        Email
        <Field component="input" type="email" name="email" />
      </label>
      <label htmlFor="name">
        Name
        <Field component="input" type="text" name="name" />
      </label>
      <label htmlFor="password">
        Password <Field component="input" type="password" name="password" />
      </label>
      <label htmlFor="password confirmation">
        Confirm Password <Field component="input" type="password" name="passwordConfirmation" />
      </label>
      <button type="submit">Log in</button>
    </form>;
}

export default reduxForm({
  form: 'signup'
})(SignUpForm);
