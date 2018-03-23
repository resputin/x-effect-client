import { API_BASE_URL } from '../config';
export const FETCH_CARDS_REQUEST = 'FETCH_CARDS_REQUEST';
export const FETCH_CARDS_SUCCESS = 'FETCH_CARDS_SUCCESS';
export const FETCH_CARDS_ERROR = 'FETCH_CARDS_ERROR';
export const CHECK_CARD_REQUEST = 'CHECK_CARD_REQUEST';
export const CHECK_CARD_SUCCESS = 'CHECK_CARD_SUCCESS';
export const CHECK_CARD_ERROR = 'CHECK_CARD_ERROR';
export const ADD_CARD_REQUEST = 'ADD_CARD_REQUEST';
export const ADD_CARD_SUCCESS = 'ADD_CARD_SUCCESS';
export const ADD_CARD_ERROR = 'ADD_CARD_ERROR';
export const CLEAR_CARDS = 'CLEAR_CARDS';

const fetchCardsRequest = () => ({
  type: FETCH_CARDS_REQUEST
});

const fetchCardsSuccess = cards => ({
  type: FETCH_CARDS_SUCCESS,
  cards
});

const fetchCardsError = error => ({
  type: FETCH_CARDS_ERROR,
  error
});

/**
 * FetchCards will fetch a GET request with the JWT in localStorage
 * from /cards and returna list of the users cards.
 */
export const fetchCards = () => dispatch => {
  dispatch(fetchCardsRequest());
  return fetch(`${API_BASE_URL}/cards`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('authToken')}`
    }
  })
    .then(res => res.json())
    .then(res => dispatch(fetchCardsSuccess(res)))
    .catch(err => {
      dispatch(fetchCardsError(err));
    });
};

const checkCardRequest = () => ({
  type: CHECK_CARD_REQUEST
});

const checkCardError = error => ({
  type: CHECK_CARD_ERROR,
  error
});

/**
 * checkX will fetch a PUT request to a specific card event to change
 * the status of the Event to 'NOT_CHECKED' to 'COMPLETED' using the
 * JWT stored in localStorage as the Bearer token.
 *
 * @param {String} id The CardEvent id to check
 */
export const checkX = id => dispatch => {
  dispatch(checkCardRequest);
  return fetch(`${API_BASE_URL}/cardEvents/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('authToken')}`
    },
    body: JSON.stringify({
      id,
      status: 'COMPLETED'
    })
  })
    .then(() => dispatch(fetchCards()))
    .catch(err => dispatch(checkCardError(err)));
};

const addCardRequest = () => ({
  type: ADD_CARD_REQUEST
});

const addCardError = err => ({
  type: ADD_CARD_ERROR
});

/**
 * addCard will fetch a POST request to cards to create a new card
 * The creation date is handled on the front end to be able to account
 * for time zone differences dependent on user location. This makes
 * time zone offset much easier to handle than trying to handle it on
 * the server, especially in terms of scalability.
 *
 * @param {Object} value contains 2 keys
 * name:    The name of the new card
 * created: The Date that the card should be created
 */
export const addCard = value => dispatch => {
  dispatch(addCardRequest());
  fetch(`${API_BASE_URL}/cards`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('authToken')}`
    },
    body: JSON.stringify({
      name: value.name,
      created: value.created
    })
  })
    .then(() => dispatch(fetchCards()))
    .catch(err => dispatch(addCardError(err)));
};

export const clearCards = () => ({
  type: CLEAR_CARDS
});
