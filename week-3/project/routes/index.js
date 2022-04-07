const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Hello, My Server!' });
});

router.get('/getData', function (req, res, next) {
  let { number } = req.query;
  if (!number) return res.send("Lack of Parameter");

  let regex = /^[0-9]*[1-9][0-9]*$/;
  let isPositiveInt = regex.test(number);
  if (isPositiveInt) {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
      sum += i;
    }
    return res.send(`${sum}`);
  } else {
    return res.send("Wrong Parameter");
  }
});

module.exports = router;