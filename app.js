const path = require("path");
const express = require("express");
const utils = require("./lib/utils");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

// Note that this is a catch all middleware
// Using it to handle 404 for now
app.use((_req, res, _next) => {
  res.status(404).sendFile(utils.createViewPath("404.html"));
});

app.listen(3000);
