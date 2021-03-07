const express = require('express');
const router = express.Router();

const response= require('../../network/response');
const controller = require('./controller');

//routes
router.get('/', function(req, res){
  //filtro en los queries
  const filterCoursesFromTeacher = req.query.teacher || null;
  console.log(filterCoursesFromTeacher)
  controller.getCourses(filterCoursesFromTeacher)
    .then((coursesList) => {
      response.success(req, res, coursesList, 200);
    })
    .catch(error => {
      response.error(req, res, "Unexpected error", 500, error);
    })
})

router.post('/', function(req, res){
  const { title, description, temary, teacher } = req.body;
  controller.addCourse(title, description, temary, teacher)
    .then((fullCourse) => {
      response.success(req, res, fullCourse, 201);
    })
    .catch(error => {
      response.error(req, res, "Información invalida", 400, "Error en el controlador courses");
    })
});

router.patch('/:id', function(req,res) {
  controller.updateCourse(req.params.id, req.body.teacher)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch(error => {
      response.error(req, res, "Error interno", 500, error);
    });
})

router.delete('/:id', function(req, res) {
  controller.deleteCourse(req.params.id)
    .then(() => {
      response.success(req, res, `Usuario ${req.params.id} eliminado`, 200);
    })
    .catch(error => {
      response.error(req, res, "Error interno", 500, error);
    });
})

module.exports = router;