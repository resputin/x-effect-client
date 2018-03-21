import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import {
  required,
  nonEmpty,
  isPhoneNumber,
  length,
  isTrimmed
} from '../validators';
import Input from './input';
import './signup-form.css';
import { setNotification } from "../actions/notification";
import TimePicker from 'react-bootstrap-time-picker';
const messageLength = length({ min: 1, max: 160 });

export function NotificationForm(props) {
  function onSubmit(values) {
    console.log(values);
    const { sendTo, message, minutesUntilExpires, cardId } = values;
    const notificationSettings = { sendTo, message, minutesUntilExpires, cardId };
    console.log(notificationSettings);
    return props.dispatch(setNotification(values))
      .then(response => console.log(response));
  }

  let errorMessage;
  if (props.error) {
    errorMessage = <div className="message message-error">{props.error}</div>;
  }

  return <form onSubmit={props.handleSubmit(value =>
        onSubmit(value)
      )} className="signup-form">
      {errorMessage}
      <Field component={Input} type="text" name="sendTo" label="Phone Number" validate={[required, nonEmpty, isTrimmed, isPhoneNumber]} />
      <Field component={Input} type="text" name="message" label="What do you want your text to say" validate={[required, nonEmpty, isTrimmed, messageLength]} />
      <Field component={TimePicker} name="hours" label="Time"/>
      <button type="submit" className="signup-button" onChange={value => props.onChange(value)}>
        Turn on Notifications
      </button>
    </form>;
}

export default reduxForm({
  form: 'notification',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('notification', Object.keys(errors)[0]))
})(NotificationForm);
