const express = require('express');
const router = express.Router();

const response= require('../../network/response');
const controller = require('./controller');
//routes
router.get('/', function(req, res){
  controller.getCourses()
    .then((coursesList) => {
      response.success(req, res, coursesList, 200);
    })
    .catch(error => {
      response.error(req, res, "Unexpected error", 500, error)
    })
})
router.post('/', function(req, res){
  const { title, description, temary, teacher } = req.body;
  controller.addCourse(title, description, temary, teacher)
    .then((fullCourse) => {
      response.success(req, res, fullCourse, 201);
    })
    .catch(error => {
      response.error(req, res, "Información invalida", 400, "Error en el controlador courses")
    })
});

module.exports = router;