import axios from "axios";

const url = "http://localhost:8080";

export function logClick(page, elementID) {
  axios
  .post(`${url}/clicks?url=${page}&elem=${elementID}`)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
}

export function logError(promise, reason) {
  axios
  .post(`${url}/errors`, { promise, reason })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
}