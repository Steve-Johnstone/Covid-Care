const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const volunteersRouter = require("./routes/volunteers");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const session = require("express-session");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

//Middleware

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());

app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(cookieParser("secretcode"));

app.use(passport.initialize());
app.use(passport.session());
require("./middleware/passport")(passport);

//Database connection

mongoose.connect("mongodb://localhost/Covid-Care", {
  useNewUrlParser: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully!");
});

//Routes

app.use("/volunteers", volunteersRouter);

//Server

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
