const defaultState = {};

// Only the global location data is stored in redux here.  Everything that's
// page specific remains local to the page.  In production there would be a lot
// more being stored in redux.
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
