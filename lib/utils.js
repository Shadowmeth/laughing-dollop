// Only put the utility / helper functions that are used
// through the entire project here.
const path = require("node:path");

const createViewPath = (viewName) => {
  const relativePathTillViews = path.relative(__dirname, "views");
  return path.join(__dirname, relativePathTillViews, viewName);
};

module.exports = { createViewPath };
