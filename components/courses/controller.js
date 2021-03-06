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

function getCourses() {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  })
}

module.exports = {
  addCourse,
  getCourses,
};