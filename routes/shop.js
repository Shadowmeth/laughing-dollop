const express = require("express");

const router = express.Router();

router.get("/", (_req, res, _next) => {
  res.send("<h1>Hello from express</h1>");
});

module.exports = router;
