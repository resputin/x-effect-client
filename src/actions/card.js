import { API_BASE_URL } from '../config';

export const FETCH_CARDS_REQUEST = 'FETCH_CARDS_REQUEST';
export const FETCH_CARDS_SUCCESS = 'FETCH_CARDS_SUCCESS';
export const FETCH_CARDS_ERROR = 'FETCH_CARDS_ERROR';

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