var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });//index view is rendered -> title is passed
  // res.sendFile - you can send an entire file - read more
});
// post, patch, delete etc methods are available here
module.exports = router;
