const Volunteer = require("../models/volunteer.model");
const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
  passport.use(
    new LocalStrategy((username, password, done) => {
      console.log(
        "username inside passport: ",
        username,
        "password inside passport: ",
        password
      );
      Volunteer.findOne({ username: username }, (err, user) => {
        if (err) console.log("error finding user");
        if (!user) return done(null, false);
        bcrypt.compare(password, user.password, (err, result) => {
          console.log("User found");
          if (err) throw err;
          if (result === true) {
            console.log("Result equals true");
            return done(null, user);
          } else {
            console.log("Result not true");
            return done(null, false);
          }
        });
      });
    })
  );
  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });
  passport.deserializeUser((id, cb) => {
    Volunteer.findOne({ _id: id }, (err, user) => {
      cb(err, user);
    });
  });
};
