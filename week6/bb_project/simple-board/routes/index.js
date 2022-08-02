var { Router } = require('express');
var router = Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect("/path")
})

module.exports = router;
