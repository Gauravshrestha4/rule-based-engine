const router = require("express").Router();
const User = require("../models/user");
router.post("/signup", (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

router.post("/login", (req, res) => {
  User.find({ email: req.body.email })
    .then(user => {
      res.send({
        data: user,
        success: true
      });
    })
    .catch(err => res.status(500).send(err));
});

module.exports = router;
