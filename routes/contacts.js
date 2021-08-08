var express = require('express');
var router = express.Router();

/* GET contacts listing. */
router.get('/', function(req, res, next) {
  res.render('contacts', { title: 'Contact!!!' });
});

module.exports = router;
