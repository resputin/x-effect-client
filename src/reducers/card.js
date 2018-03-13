import {
  FETCH_CARDS_ERROR,
  FETCH_CARDS_REQUEST,
  FETCH_CARDS_SUCCESS,
  CHECK_CARD_REQUEST,
  CHECK_CARD_SUCCESS
} from '../actions/card';

const intialState = {
  loading: false,
  error: null,
  cards: {},
  newCard: false
};

export default function reducer(state = intialState, action) {
  if (action.type === FETCH_CARDS_REQUEST) {
    return Object.assign({}, state, { loading: true });
  } else if (action.type === FETCH_CARDS_SUCCESS) {
    const cardObj = {};
    action.cards.forEach(card => {
      cardObj[card.id] = card;
    })
    return Object.assign({}, state, {
      cards: cardObj,
      loading: false
    });
  } else if (action.type === FETCH_CARDS_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  } else if (action.type === CHECK_CARD_REQUEST) {
    return Object.assign({}, state, { loading: true });
  // } else if (action.type === CHECK_CARD_SUCCESS) {
  //   const id = action.id
  //   const {id, ...oldCards} = state.cards;
  //   const cards = {cards: }
  //   Object.assign({}, state, {cards: {
  //     id: action.card,
  //     oldCards
  //   } })
  }
  return state;
}
