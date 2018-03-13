import React from 'react';
import { Field, reduxForm } from 'redux-form';

export function CardForm(props) {

  return (
    <form onSubmit={props.handleSubmit(value => props.onSubmit(value.title))}>
      <Field component="input" name="title" />
      <button type="submit">Add</button>
    </form>
  );
}

export default reduxForm({
  form: 'card'
})(CardForm);
