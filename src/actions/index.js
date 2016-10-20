import axios from 'axios';

import { ADD_OPTIONS, HIDE_MODAL } from './types';

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
    dispatch({ type: HIDE_MODAL });
    axios.post(`${ROOT_URL}/email`, { email, rapper, description })
      .then(response => {
        console.log(response);
      })
      .catch(() => {
        console.log('Error sending email. Check if you have a valid email');
      });
  }
}

export function hideModal() {
  return function(dispatch) {
    dispatch({ type: HIDE_MODAL });
  }
}
