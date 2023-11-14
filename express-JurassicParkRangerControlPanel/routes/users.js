var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET Dinosaurs page */
router.get('/dinosaurs', function(req, res, next) {
  res.send('This is the map page');
});

module.exports = router;
