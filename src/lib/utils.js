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

export function logError(error) {
  axios
  .post(`${url}/errors`, { error })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
}