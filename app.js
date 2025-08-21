const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded());

app.use("/admin", adminRoutes);
app.use(shopRoutes);

// Note that this is a catch all middleware
app.use((_req, res, _next) => {
  res.status(404).send("<h1>Page not found!</h1>");
});

app.listen(3000);
