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

app.get("/customers", (req, res) => {
  const customers = [
    { id: 1, firstName: "John", lastName: "Doe" },
    { id: 2, firstName: "Brad", lastName: "Traversy" },
    { id: 3, firstName: "Mary", lastName: "Swanson" }
  ];

  res.json(customers);
});

app.use(cors());
app.use("/api/items", items);
app.use("/ibm/personalities", personalities);
app.use(bodyParser.json);

app.listen(port, () => `Server running on port ${port}`);
