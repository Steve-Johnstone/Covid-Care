const router = require("express").Router();
const Volunteer = require("../models/volunteer.model");

//Register

router.route("/register").post((req, res) => {
  const newVolunteer = new Volunteer({
    name: req.body.name,
    email: req.body.email,
    postcode: req.body.postcode,
    task: req.body.task,
    password: req.body.password,
  });

  newVolunteer
    .save()
    .then(() => res.json("Volunteer added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//Login
router.route("/login").get((req, res) => {});

module.exports = router;
