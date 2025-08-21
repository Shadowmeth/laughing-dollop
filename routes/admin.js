const express = require("express");
const path = require("node:path");

const router = express.Router();

router.get("/add-product", (_req, res, _next) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

router.post("/add-product", (req, res, _next) => {
  // note that the actual handling of data will be done here
  // for example saving the file into a database
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
