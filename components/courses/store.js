const list = [];

function addCourse(fullCourse) {
  list.push(fullCourse);
}

function getCourses(){
  return list;
}

module.exports = {
  add: addCourse,
  list: getCourses,
}