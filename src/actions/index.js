import axios from 'axios';

import { ADD_OPTIONS } from './types';

const ROOT_URL = 'http://localhost:8080';

export function addOption(id) {
  return function(dispatch) {
    let option = {};
    option[id] = true;
    dispatch({ type: ADD_OPTIONS, payload: option });
  }
}

export function sendEmail(email, rapper, description) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/email`, { email, rapper, description })
      .then(response => {
        console.log(response);
      })
      .catch(() => {
        console.log('There was an error sending the email.');
      });
  }
}
