var express = require('express');
var router = express.Router();

let imagencontroller = require('../controllers/imagencontroller')

router.get('/', imagencontroller.insta);

router.put('/update', imagencontroller.update);

//router.get('/productos/:id', imagencontroller.productos)

router.get('/imagen/:id', imagencontroller.imagen)

module.exports = router;
