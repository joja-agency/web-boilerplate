const path = require("path");
const express = require("express");
const reactApp = require("./router");

const PORT = process.env.PORT || 3001;
const app = express();

//Serve static files
app.use("/static", express.static(path.join(__dirname, "../build/static")));

app.use(reactApp);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});
