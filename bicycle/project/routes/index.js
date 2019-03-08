var express = require('express');
var router = express.Router();
var md = require("mongodb-curd");
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.post("/index", function (req, res) {
  console.log(req.body)
  var type = req.body.type ? {
    type: req.body.type
  } : {};
  md.find("yue", "data3", type, function (result) {
    res.send({
      code: 0,
      data: result
    })
  })
})
module.exports = router;