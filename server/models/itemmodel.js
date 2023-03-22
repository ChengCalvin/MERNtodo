const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema
const ItemSchema = new Schema({
  listItem: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = listItem = mongoose.model("listItem", ItemSchema);
