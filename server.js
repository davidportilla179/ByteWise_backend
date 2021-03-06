const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const cors = require('cors');

const app = express();
const response= require('./network/response');
//middlewares
app.use(cors());
app.use(bodyParser.json());
//app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(express.urlencoded({ extended: false }));
app.use(router);
//routes
router.get('/courses', function(req, res){
  response.success(req,res,"Metodo GET", 200);
})
router.post('/courses', function(req, res){
  //response.error(req, res, "error inesperado", 500, "no hay usuario")
  //response.success(req,res,"Metodo POST", 201);
})

app.use('/app', express.static('public'));

app.listen(3000, function() {
  console.log(`La aplicacion esta escuchando en http://localhost:3000`)
})