const Model = require('./model');

function addCourse(fullCourse) {
  const course = new Model(fullCourse);
  course.save();
}

async function getCourses(filterCoursesFromTeacher){
  const filter = {};
  if (filterCoursesFromTeacher !== null) {
    filter = { teacher: filterCoursesFromTeacher };
  }
  const courses = await Model.find(filter);
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

function deleteCourse(id) {
  return Model.deleteOne({
    _id: id
  })
}

module.exports = {
  add: addCourse,
  list: getCourses,
  updateCourse: updateCourse,
  remove: deleteCourse,
}