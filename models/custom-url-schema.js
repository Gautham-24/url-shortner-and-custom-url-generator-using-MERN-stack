const mongoose = require("mongoose");

const customSchema = new mongoose.Schema({
  customURL: {
    type: String,
    required: true,
    unique: true,
  },
  longURL: {
    type: String,
    required: true,
  },
});

const C_URL = mongoose.model("custom_url", customSchema);

module.exports = C_URL;
