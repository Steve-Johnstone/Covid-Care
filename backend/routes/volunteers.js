const bcrypt = require("bcrypt");
const { SSL_OP_EPHEMERAL_RSA } = require("constants");
const passport = require("passport");
const router = require("express").Router();
const Volunteer = require("../models/volunteer.model");

//Register

router.route("/register").post(async (req, res) => {
  try {
    let volunteer = await Volunteer.findOne({ email: req.body.email });

    if (volunteer)
      return res.send("Account already registered with this email address");

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

    res.json("Volunteer added!");
  } catch (err) {
    console.log(err);
  }
});

//Login
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.json({ status: false });
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.json({ status: true });
        console.log(res.json);
      });
    }
  })(req, res, next);
});

module.exports = router;
