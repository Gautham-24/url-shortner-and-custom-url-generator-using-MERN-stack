const URL = require("../models/short-url-schema");
const C_URL = require("../models/custom-url-schema");

async function createCustomURL(req, res) {
  const body = req.body;
  if (!body.custom_url || !body.long_url) {
    return res.status(400).json({ err: "enter url" });
  }
  const userURL = body.custom_url;
  const fullURL = body.long_url;
  await URL.create({
    short_url: userURL,
    url: fullURL,
    visitHistory: [],
  });
  await C_URL.create({
    customURL: userURL,
    longURL: fullURL,
  });

  return res.status(201).json({ msg: "custom url created" });
}

async function getCustomURLs(req, res) {
  const allURLs = await C_URL.find();
  return res.json(allURLs);
}
module.exports = { createCustomURL, getCustomURLs };
