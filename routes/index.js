var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { siteTitle: 'Junior IW', siteSubtitle: 'by Alex Baroody' });
  // res.render('index', { siteTitle: 'Visualizing Statistics', siteSubtitle: 'A set of visual tutorials on the most counterintuitive topics in Statistics' });
});

module.exports = router;