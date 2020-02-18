const express = require("express");
const app = express();

app.listen(8080, () => {
  console.log("Server running on port 8080")
});

app.post("/clicks", (req, res, next) => {
  console.log("Logging click", req, res, next);
});

app.post("/errors", (req, res, next) => {
  console.log("Logging error", req, res, next);
})