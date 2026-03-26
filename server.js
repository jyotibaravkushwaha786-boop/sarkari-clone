const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const postRoutes = require("./routes/postRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/sarkariDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Routes
app.use("/api/posts", postRoutes);

// Run scraper
require("./scraper");

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
