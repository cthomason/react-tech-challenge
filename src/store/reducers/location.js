const defaultState = {};

export function location(state = defaultState, action) {
  switch (action.type) {
    // for the purposes of this challenge the actions are hard coded
    // allow everything to fall through.  The main thing we want is the action
    // each one would do different things in production
    case "LOAD":
    case "ADD":
    case "UPDATE":
    case "DELETE":
      let location = action.payload;
      return { ...state, location };
    default:
      return state;
  }
}
