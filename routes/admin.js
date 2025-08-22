const express = require("express");
const utils = require("../lib/utils");
const router = express.Router();

router.get("/add-product", (_req, res, _next) => {
  res.sendFile(utils.createViewPath("add-product.html"));
});

router.post("/add-product", (req, res, _next) => {
  // note that the actual handling of data will be done here
  // for example saving the file into a database
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
