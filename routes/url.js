const express = require("express");
const router = express.Router();
const {
  generateShortURL,
  showURLs,
  showTimesVisited,
} = require("../controllers/url-handler");

router.route("/").get(showURLs).post(generateShortURL);
router.get("/analytics/:id", showTimesVisited);

module.exports = router;
