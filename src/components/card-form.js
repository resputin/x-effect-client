import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './card-form.css';
import { required, length } from '../validators';
const titleLength = length({ min: 3 });

/**
 * CardForm handles adding a new card. It dispatches an add card action
 * and then clears its value on a successful submit.
 */
export function CardForm(props) {
  return (
    <form
      onSubmit={props.handleSubmit(value => {
        props.onSubmit(value);
        props.change('title', '');
      })}
      className="card-form"
    >
      <label htmlFor="title">
        Add a new Card
        <Field
          component="input"
          name="title"
          validate={[required, titleLength]}
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
}

export default reduxForm({
  form: 'card'
})(CardForm);
