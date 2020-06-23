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
    listItem: req.body.listitem,
    itemDes: req.body.itemdes,
  });
  newItem.save().then((listItem) => {
    res.json(listItem);
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
