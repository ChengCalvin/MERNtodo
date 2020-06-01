const express = require("express");
const router = express.Router();

//item model
const Item = require("../../models/itemmodel");

router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((items) => res.json(items));
});

router.post("/", (req, res) => {
  const newItem = new Item({
    data: req.body.data,
  });
  newItem.save().then((item) => {
    item && res.json(item);
  });
});

router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then((item) => item.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});
module.exports = router;
