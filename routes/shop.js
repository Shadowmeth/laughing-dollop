const express = require("express");
const router = express.Router();

const admin = require("./admin");

router.get("/", (_req, res, _next) => {
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
});

module.exports = router;
