import { HIDE_MODAL } from '../actions/types';

export default function(state = true, action) {
  switch (action.type) {
    case HIDE_MODAL:
      return false;
  }
  return state;
}
