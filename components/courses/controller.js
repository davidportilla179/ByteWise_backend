const store = require('./store');

function addCourse(title, description, temary, teacher) {
  return new Promise((resolve, reject) => {
    if (!title || !description || !temary || !teacher) {
      console.error(chalk.red('[coursesController] faltan datos o son incorrectos'));
      reject('Los datos son incorrectos')
    }

    const fullCourse = {
      title: title,
      description: description,
      temary: temary,
      teacher: teacher
    }
    store.add(fullCourse)
    resolve(fullCourse);
  });
};

function getCourses(filterCoursesFromTeacher) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterCoursesFromTeacher));
  })
}

function updateCourse(id, teacher) {
  return new Promise(async (resolve, reject) => {
    if (!id || !teacher) {
      reject('Invalid data');
    }
    const result = await store.updateCourse(id, teacher);
    resolve(result);
  })
}

function deleteCourse(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject('Id invalido')
    }
    store.remove(id)
      .then(() => {
        resolve();
      })
      .catch(e => {
        reject(e);
      })
  })
}

module.exports = {
  addCourse,
  getCourses,
  updateCourse,
  deleteCourse
};