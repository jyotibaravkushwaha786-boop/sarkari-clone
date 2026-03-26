const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  link: String,
  category: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Post", postSchema);
