export function addOption(id, points) {
  let option = {};
  option[id] = points;
  return {
    type: 'ADD_OPTIONS',
    payload: option
  };
}
