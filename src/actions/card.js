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

export const fetchCards = () => dispatch => {
  dispatch(fetchCardsRequest());
  return fetch(`${API_BASE_URL}/cards`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
    .then(res => res.json())
    .then(res => dispatch(fetchCardsSuccess(res)))
    .catch(err => dispatch(fetchCardsError(err)));
}

const checkCardRequest = () => ({
  type: CHECK_CARD_REQUEST
});

const checkCardError = error => ({
  type: CHECK_CARD_ERROR,
  error
});

export const checkX = id => dispatch => {
  dispatch(checkCardRequest);
  return fetch(`${API_BASE_URL}/cardEvents/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify({
      id,
      status: 'COMPLETED'
    })
  })
  .then(() => dispatch(fetchCards()))
  .catch(err => dispatch(checkCardError(err)));
}

const addCardRequest = () => ({
  type: ADD_CARD_REQUEST
});

const addCardError = err => ({
  type: ADD_CARD_ERROR,
})

export const addCard = value => dispatch => {
  dispatch(addCardRequest());
  fetch(`${API_BASE_URL}/cards`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify({
      name: value
    })
  })
    .then(() => dispatch(fetchCards()))
    .catch(err => dispatch(addCardError(err)));
}