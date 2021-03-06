

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
    console.log(fullCourse);
    resolve(fullCourse);
  });
};

module.exports = {
  addCourse,
};