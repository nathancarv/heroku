var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/nate', function(req, res, next) {
  res.json('index', { hello: 'from Xander' });
});


module.exports = router;
