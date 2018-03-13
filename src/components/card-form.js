import React from 'react';
import { Field, reduxForm } from 'redux-form';

export function CardForm(props) {
  return (
    <form onSubmit={() => props.handleSubmit()}>
      <Field component="input" />
    </form>
  );
}

export default reduxForm({
  form: 'card'
})(CardForm);
