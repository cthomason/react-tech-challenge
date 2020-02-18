const express = require("express");
const app = express();

// Need to set this to avoid CORS errors
app.all("*", function(req, res, next) {
  const origin = req.get("origin");
  res.header("Access-Control-Allow-Origin", origin);
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});

app.post("/clicks", (req, res, next) => {
  console.log("Logging click", req.params.page, req.params.elem);
});

app.post("/errors", (req, res, next) => {
  console.log("Logging error", req.param);
});
