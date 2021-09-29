const mongoose = require("mongoose");

const volunteerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minLength: 5,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  postcode: {
    type: String,
    required: true,
    trim: true,
  },
  task: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minLength: 5,
  },
});

const Volunteer = mongoose.model("Volunteer", volunteerSchema);

module.exports = Volunteer;
