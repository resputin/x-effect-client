import { API_BASE_URL } from "../config";

export const SET_NOTIFICATION_REQUEST = 'SET_NOTIFICATION_REQUEST';
export const SET_NOTIFICATION_SUCCESS = 'SET_NOTIFICATION_SUCCESS';
export const SET_NOTIFICATION_ERROR = 'SET_NOTIFICATION_ERROR';

const setNotificationRequest = () => ({
  type: SET_NOTIFICATION_REQUEST
});

const setNotificationError = err => ({
  type: SET_NOTIFICATION_ERROR,
  err
});

export const setNotification = values => dispatch => {
  dispatch(setNotificationRequest());
  return fetch(`${API_BASE_URL}/notifications`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('authToken')}`
    },
    body: JSON.stringify({
      sendTime: values.minutesUntilExpires,
      sendTo: values.sendTo,
      cardId: values.cardId,
      message: values.message
    })
  }).then(res => res.json())
  .catch(err => dispatch(setNotificationError(err)));
} 