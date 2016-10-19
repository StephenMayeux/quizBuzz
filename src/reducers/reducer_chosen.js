export default function(state = {}, action) {
  switch (action.type) {
    case 'ADD_OPTIONS':
      return { ...state, ...action.payload }
  }
  return state;
}
