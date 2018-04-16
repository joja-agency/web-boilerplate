const fs = require("fs");
const path = require("path");
const router = require("express").Router();
const { renderToString } = require("react-dom/server");
const ReactApp = require("../build/static/ssr/main").default;

router.get("/favicon.ico", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "favicon.ico"));
});

router.get("/robots.txt", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "robots.txt"));
});

router.get("/sitemap.xml", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "sitemap.xml"));
});

router.get("*", (req, res) => {
  var fileName = path.join(__dirname, "../build", "index.html");

  fs.readFile(fileName, "utf8", (err, file) => {
    if (err) {
      throw err;
    }

    const context = {};

    const react = renderToString(ReactApp(context, req.url));

    const [head, tail] = file.split("{react-app}");

    res.status(200).send(head + react + tail);
  });
});

module.exports = router;
