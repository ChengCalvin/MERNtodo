const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require("./routes/api/items");

require("dotenv").config();
const app = express();

//express config
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

//config routes
app.use("/api/items", items);

const uri = process.env.URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB Connected");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server running on port: ${port}`);
});
