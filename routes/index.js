var express = require('express');
var router = express.Router();

let imagencontroller = require('../controllers/imagencontroller')

router.get('/', imagencontroller.insta);

router.put('/update', imagencontroller.update);

module.exports = router;