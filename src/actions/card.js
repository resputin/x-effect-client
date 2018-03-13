import { API_BASE_URL } from '../config';

export const FETCH_CARDS_REQUEST = 'FETCH_CARDS_REQUEST';
export const FETCH_CARDS_SUCCESS = 'FETCH_CARDS_SUCCESS';
export const FETCH_CARDS_ERROR = 'FETCH_CARDS_ERROR';
export const CHECK_CARD_REQUEST = 'CHECK_CARD_REQUEST';
export const CHECK_CARD_SUCCESS = 'CHECK_CARD_SUCCESS';
export const CHECK_CARD_ERROR = 'CHECK_CARD_ERROR';

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
  return fetch(API_BASE_URL)
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
  return fetch(`${API_BASE_URL}/cards/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id,
      xArray: true
    })
  })
  .then(() => dispatch(fetchCards()))
  .catch(err => dispatch(checkCardError(err)));
}

