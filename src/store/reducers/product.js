const defaultState = {};

export function product(state = defaultState, action) {
  switch (action.type) {
    // for the purposes of this challenge the actions are hard coded
    case "ADD":
      return state;
    case "UPDATE":
      return state;
    case "DELET":
      return state;
    default:
      return state;
  }
}