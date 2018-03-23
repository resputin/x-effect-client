import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import cardReducer from './reducers/card';
import authReducer from './reducers/auth';
import { reducer as FormReducer } from 'redux-form';
import { setAuthToken, refreshAuthToken } from './actions/auth';
import { loadAuthToken } from './local-storage';

/**
 * The store uses 3 different reducers to handle forms, cards, and auth.
 * It will also attempt to refresh the auth token if one exists.
 */
const store = createStore(
  combineReducers({
    form: FormReducer,
    card: cardReducer,
    auth: authReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

const authToken = loadAuthToken();
if (authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
  store.dispatch(refreshAuthToken());
}

export default store;
