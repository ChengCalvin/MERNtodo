const express = require("express");
const router = express.Router();

//item model
const Item = require("../../models/itemmodel");

router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((listItems) => {
      res.json(listItems);
    });
});

router.post("/", (req, res) => {
  const newItem = new Item({
    listItem: req.body.listItem,
  });
  newItem.save().then((listItems) => {
    listItems && res.json(listItems);
  });
});

router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then((listItems) =>
      listItems.remove().then(() => res.json({ success: true }))
    )
    .catch((err) => res.status(404).json({ success: false }));
});
module.exports = router;
