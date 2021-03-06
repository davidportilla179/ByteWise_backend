const express = require('express');
const router = express.Router();

const response= require('../../network/response');
const controller = require('./controller');
//routes
router.get('/', function(req, res){
  response.success(req,res,"Metodo GET", 200);
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