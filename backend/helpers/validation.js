const Joi = require("joi");

function validateVolunteer(volunteer) {
  const schema = {
    name: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(5).max(50).required().email(),
    postcode: Joi.string().required(),
    task: Joi.string().required(),
    password: Joi.string().min(5).max(50).required(),
  };
  return Joi.validate(volunteer, schema);
}

module.exports = validateVolunteer;
