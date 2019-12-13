const defaultState = {};

export function product(state = defaultState, action) {
  switch (action.type) {
    // for the purposes of this challenge the actions are hard coded
    case "LOAD":
      let location = action.payload
      return { location, ...state };
    case "ADD":
      return state;
    case "UPDATE":
      return state;
    case "DELETE":
      return state;
    default:
      return state;
  }
}