const bcrypt = require("bcrypt");
const passport = require("passport");
const router = require("express").Router();
const Volunteer = require("../models/volunteer.model");
const validate = require("../helpers/validation");

//Register

router.route("/register").post(async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) return res.json({ error: error.details[0].message });

    let volunteer = await Volunteer.findOne({ email: req.body.email });

    if (volunteer)
      return res.json({
        error: "Account already registered with this email address",
      });

    volunteer = new Volunteer({
      name: req.body.name,
      email: req.body.email,
      postcode: req.body.postcode,
      task: req.body.task,
      password: req.body.password,
    });

    const salt = await bcrypt.genSalt(10);
    volunteer.password = await bcrypt.hash(volunteer.password, salt);

    await volunteer.save();

    res.json({ status: true });
  } catch (err) {
    res.json({ error: err.message });
  }
});

//Login
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return res.json({ error: err, status: false });
    if (!user) {
      return res.json({
        error: "Invalid login details",
        status: false,
      });
    } else {
      req.logIn(user, (err) => {
        if (err) {
          return res.json({ error: err, status: false });
        }
        res.json({ status: true });
      });
    }
  })(req, res, next);
});

module.exports = router;
