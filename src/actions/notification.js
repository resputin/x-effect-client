import { API_BASE_URL } from '../config';
import { fetchCards } from './card';
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

/**
 * setNotification will fetch a POST request to /notifications in order
 * to correctly set the notifications for a specific card. On a successful
 * POST, it will re fetch the cards to be able to update the state properly.
 *
 * @param {Object} values Contains
 * minutesUntilExpires: an int of the difference between
 *                      midnight and the time the notification
 *                      should be sent
 * sendTo:              the phone number to send the notification to
 * cardId:              automatically passed in from the form
 * message:             The message to be sent in the text
 */
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
  })
    .then(res => dispatch(fetchCards()))
    .catch(err => dispatch(setNotificationError(err)));
};

/**
 * deleteNotification will fetch a DELETE request to a card id.
 * The delete will remove all notifications from a specific card.
 * Once this returns successfully it will re fetch cards to correctly
 * populate the state.
 *
 * @param {Number} id The id of the card to delete notifications on
 */
export const deleteNotification = id => dispatch => {
  dispatch(setNotificationRequest());
  return fetch(`${API_BASE_URL}/notifications/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('authToken')}`
    }
  })
    .then(res => dispatch(fetchCards()))
    .catch(err => dispatch(setNotificationError(err)));
};
