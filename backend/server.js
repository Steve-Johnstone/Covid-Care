const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const volunteersRouter = require("./routes/volunteers");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost/CovidCare", {
  useNewUrlParser: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully!");
});

app.use("/volunteers", volunteersRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
