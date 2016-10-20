export function addOption(id) {
  let option = {};
  option[id] = true;
  return {
    type: 'ADD_OPTIONS',
    payload: option
  };
}
