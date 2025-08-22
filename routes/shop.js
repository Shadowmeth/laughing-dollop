const express = require("express");
const utils = require("../lib/utils");
const router = express.Router();

router.get("/", (_req, res, _next) => {
  res.sendFile(utils.createViewPath("shop.html"));
});

module.exports = router;
