export function loadLocations(data) {
  return {
    type: "LOAD",
    payload: data
  };
}

export function updateLocation(data) {
  return {
    type: "UPDATE",
    payload: data
  };
}

export function addLocation(data) {
  return {
    type: "ADD",
    payload: data
  };
}

export function deleteLocation(data) {
  return {
    type: "DELETE",
    payload: data
  };
}
