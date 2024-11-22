const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    short_url: {
      type: String,
      unique: true,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    visitHistory: [{ timestamp: { type: Number } }],
  },
  { timestamps: true }
);

const URL = mongoose.model("urls", urlSchema);

module.exports = URL;
