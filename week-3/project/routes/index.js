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

router.get('/trackName', function (req, res, next) {
  let { name } = req.cookies;
  if (!name) {
    res.render('myName');
  } else {
    res.redirect(`/${name}`);
  }
})

router.post('/trackName', function (req, res, next) {
  let { name, password } = req.body;
  name = name.trim();
  password = password.trim();
  if (name.length > 0 && password.length > 0) {
    res.render('myName', { name });
  } else {
    res.render('myName', { error: `Name and password can't be empty!` });
  }
})

router.get('/:myName', function (req, res, next) {
  let { myName } = req.params;
  res.cookie('name', myName);
  res.render('myName', { name: myName });
})

module.exports = router;