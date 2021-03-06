const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./network/routes');

const app = express();

//middlewares
app.use(cors());
//app.use(bodyParser.json());
app.use(express.json());
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));
router(app);


app.use('/app', express.static('public'));

app.listen(3000, function() {
  console.log(`La aplicacion esta escuchando en http://localhost:3000`)
})