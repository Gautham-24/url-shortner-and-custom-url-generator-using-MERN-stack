const express = require("express");
const { connect } = require("./connection");
const urlRouter = require("./routes/url");
const URL = require("./models/short-url-schema");

const app = express();

app.listen(8000, () => {
  console.log(`server started on port 8000`);
});

connect("mongodb://127.0.0.1:27017/short-url")
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use("/url", urlRouter);
app.get("/:id", async (req, res) => {
  const shortURL = req.params.id;
  const longURL = await URL.findOneAndUpdate(
    { short_url: shortURL },
    { $push: { visitHistory: { timestamp: Date.now() } } }
  );
  return res.redirect(longURL.url);
});
