import { API_BASE_URL } from '../config';
const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_ERROR = 'LOGIN_ERROR';


const loginRequest = () => ({
  type: LOGIN_REQUEST
});

const loginSuccess = token => {
  localStorage.setItem('token', token);
};

const loginError = error => ({
  type: LOGIN_ERROR,
  error
});

export const login = (email, password) => dispatch => {
  dispatch(loginRequest());
  return fetch(`${API_BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  })
    .then(res => res.json())
    .then(token => loginSuccess(token.authToken))
    .catch(err => dispatch(loginError(err)));
};
