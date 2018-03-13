import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import cardReducer from './reducers/card';
import {reducer as FormReducer } from 'redux-form';

const store = createStore(
  combineReducers({
    form: FormReducer,
    card: cardReducer
    
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

export default store;