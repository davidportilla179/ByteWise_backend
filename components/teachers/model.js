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
  uploadedCourses: Array,
});

const model = mongoose.model('Teacher', mySchema);
module.exports = model;