const express = require('express');
const path = require('path');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/welcome', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/welcome.html'));
});


module.exports = router;
