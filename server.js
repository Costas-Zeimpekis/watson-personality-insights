const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dbConfig = require("./config/keys");
const items = require("./routes/api/items.js");
const personalities = require("./routes/ibm/personalities.js");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

mongoose
  .connect(dbConfig.mongoURI)
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.Console(err));

app.use(cors());
app.use(bodyParser.json());
app.use("/api/items", items);

app.use("/ibm/personalities", personalities);

app.listen(port, () => `Server running on port ${port}`);
