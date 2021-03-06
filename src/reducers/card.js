import {
  FETCH_CARDS_ERROR,
  FETCH_CARDS_REQUEST,
  FETCH_CARDS_SUCCESS,
  CHECK_CARD_REQUEST,
  CLEAR_CARDS
} from '../actions/card';

const initialState = {
  loading: false,
  error: null,
  cards: {},
  newCard: false
};

/**
 * The card reducer handles fetched cards from the database and will clear out cards from the state
 *
 * @param {Object} state The card state to be modified
 * @param {Object} action An Object to specifiy what the reducer should do and the payload to change
 */
export default function reducer(state = initialState, action) {
  if (action.type === FETCH_CARDS_REQUEST) {
    return Object.assign({}, state, { loading: true });
  } else if (action.type === FETCH_CARDS_SUCCESS) {
    if (action.cards) {
      const cardObj = {};
      action.cards.forEach(card => {
        cardObj[card.id] = card;
      });
      return Object.assign({}, state, {
        cards: cardObj,
        loading: false
      });
    }
  } else if (action.type === FETCH_CARDS_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  } else if (action.type === CHECK_CARD_REQUEST) {
    return Object.assign({}, state, { loading: true });
  } else if (action.type === CLEAR_CARDS) {
    return Object.assign({}, state, initialState);
  }
  return state;
}
