const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
  email: String,
  password: String,
  username: String,
  firstName: String,
  lastName: String,
  country: String,
  age: Number,
  enrolledCourses: Array,
});

const model = mongoose.model('Student', mySchema);
module.exports = model;