const express = require('express');
const router = express.Router();

const response= require('../../network/response');
//routes
router.get('/', function(req, res){
  response.success(req,res,"Metodo GET", 200);
})
router.post('/', function(req, res){
  //response.error(req, res, "error inesperado", 500, "no hay usuario")
  response.success(req,res,"Metodo POST", 201);
});

module.exports = router;