const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');

//middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000, function() {
  console.log(`La aplicacion esta escuchando en http://localhost:3000`)
})