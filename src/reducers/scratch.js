const intialState = {
  loading: false,
  error: null,
  cards: {b: {
    "name": "Run every day",
    "xArray": [true]
  },
  a: {
    "name": "Eat Healthy",
    "xArray": [true, true, false]
  }}
};

const { cards } = intialState;

console.log(Object.assign({}, intialState, cards ,{ a: {xArray: [true, true, true, true]}}));
