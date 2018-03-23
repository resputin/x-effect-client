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
import './notification-form.css';
import { setNotification } from '../actions/notification';
const messageLength = length({ min: 1, max: 160 });

/**
 * Notificaiton form is very similar to all the other forms in the application.
 * The special thing it does here is it calculates when to send the notificaiton
 * by subtracting the minutesUntilExpires from the expiration date. This is to
 * account for differing time zones on the server, to make sure that each users
 * time zone offset will still allow them to send notifications at the time they
 * expect.
 */
export function NotificationForm(props) {
  function onSubmit(values) {
    const { sendTo, message, sendTime, cardId } = values;
    const a = sendTime.split(':');
    const minutesUntilExpires = Math.abs(+a[0] * 60 + +a[1] - 1440);
    const notificationSettings = {
      sendTo,
      message,
      minutesUntilExpires,
      cardId
    };
    return props
      .dispatch(setNotification(notificationSettings))
      .then(response => response);
  }

  let errorMessage;
  if (props.error) {
    errorMessage = <div className="message message-error">{props.error}</div>;
  }

  return (
    <form
      onSubmit={props.handleSubmit(value => onSubmit(value))}
      className="notification-form"
    >
      {errorMessage}
      <Field
        component={Input}
        type="text"
        name="sendTo"
        label="Phone Number"
        validate={[required, nonEmpty, isTrimmed, isPhoneNumber]}
      />
      <Field
        component={Input}
        type="text"
        name="message"
        label="What do you want your text to say"
        validate={[required, nonEmpty, isTrimmed, messageLength]}
      />
      <Field
        component={Input}
        type="time"
        name="sendTime"
        label="What time would you like to be notified"
        validate={[required]}
      />
      <button
        type="submit"
        className="notifications-button"
        onChange={value => props.onChange(value)}
      >
        Turn on Notifications
      </button>
    </form>
  );
}

export default reduxForm({
  form: 'notification',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('notification', Object.keys(errors)[0]))
})(NotificationForm);
