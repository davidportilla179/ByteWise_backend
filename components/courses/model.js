const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
  title: String,
  description: String,
  temary: Array,
  teacher: Number,
});

const model = mongoose.model('Course', mySchema);
module.exports = model;