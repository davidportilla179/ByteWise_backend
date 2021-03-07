const db = require('mongoose');
const Model = require('./model');
const uri ='mongodb+srv://db_bedu:bBaqykee00Eh5T6P@cluster0.v02gx.mongodb.net/ByteWise?retryWrites=true&w=majority';

db.Promise = global.Promise;

db.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('[db] Conectada con éxito'))
  .catch(err => console.error('[db]', err));

function addCourse(fullCourse) {
  //list.push(fullCourse);
  const course = new Model(fullCourse);
  course.save();
}

async function getCourses(){
  //return list;
  const courses = await Model.find();
  return courses;
}

async function updateCourse(id, teacher) {
  const updatedCourse = await Model.findOneAndUpdate(
    { _id: id },
    { teacher },
    { new: true }
  )
  return updatedCourse
}

module.exports = {
  add: addCourse,
  list: getCourses,
  updateCourse: updateCourse,
}