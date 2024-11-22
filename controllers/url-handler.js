const URL = require("../models/short-url-schema");

const shortid = require("shortid");
async function generateShortURL(req, res) {
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({ error: "error enter url" });
  }
  const shortURL = shortid();
  await URL.create({
    short_url: shortURL,
    url: body.url,
    timesVisited: [],
  });

  return res.json({ short_url: shortURL });
}

async function showURLs(req, res) {
  const allURLs = await URL.find();

  return res.json(allURLs);
}

async function showTimesVisited(req, res) {
  const shortURL = req.params.id;
  const urlDetails = await URL.findOne({ short_url: shortURL });

  return res.json({ timesVisited: urlDetails.visitHistory.length });
}

module.exports = { generateShortURL, showURLs, showTimesVisited };
