const router = require("express").Router();
const Item = require("../../models/Item");

// @route GET api/router
// @desc GET all router
// @access Public
router.get("/", (req, res) => {
  Item.find().then((router) => {
    console.log("route");
    return res.json(router);
  });
});

// @route POST api/router
// @desc POST all router
// @access Public
router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });
  newItem.save().then((item) => res.json(item));
});

// @route DELETE api/router
// @desc DELETE an router
// @access Public
router.delete("/:id", (req, res) => {
  Item.findById(req.params.id).then((item) =>
    item
      .remove()
      .then(() => res.json({ success: true }))
      .catch((err) => res.status(404).json({ success: false }))
  );
});

router.route("/test").get((req, res) => {
  const customers = [
    { id: 1, firstName: "John", lastName: "Doe" },
    { id: 2, firstName: "Brad", lastName: "Traversy" },
    { id: 3, firstName: "Mary", lastName: "Swanson" }
  ];

  res.json(customers);
});

module.exports = router;
