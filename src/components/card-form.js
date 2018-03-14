import React from 'react';
import { Field, reduxForm } from 'redux-form';

export function CardForm(props) {

  return <form onSubmit={props.handleSubmit(value =>
        props.onSubmit(value.title)
      )}>
      <label htmlFor="title">
        Add a new Card
        <Field component="input" name="title" />
      </label>
      <button type="submit">Add</button>
    </form>;
}

export default reduxForm({
  form: 'card'
})(CardForm);