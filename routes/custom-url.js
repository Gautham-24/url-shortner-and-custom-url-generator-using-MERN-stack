const express = require("express");
const router = express.Router();
const {
  createCustomURL,
  getCustomURLs,
} = require("../controllers/custom-url-handler");

router.post("/create", createCustomURL);

router.get("/show", getCustomURLs);

module.exports = router;
