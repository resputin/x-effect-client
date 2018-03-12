import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import cardReducer from './reducers/card';

const store = createStore(
  cardReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

export default store;