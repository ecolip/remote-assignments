const express = require('express');
const router = express.Router();

const verifyValue = (name, password, res) => {
  let trimName = name.trim();
  let trimPassword = password.trim();
  if (trimName.length > 0 && trimPassword.length > 0) {
    res.cookie('name', trimName);
    res.render('myName', { name: trimName });
  } else {
    res.render('myName', { error: `Name and password can't be empty!` });
  }
}

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

router.get('/myName', function (req, res, next) {
  let { name } = req.cookies;
  if (!name) return res.render('myName');
  res.render('myName', { name });
})

router.post('/myName', function (req, res, next) {
  let { name, password } = req.body;
  verifyValue(name, password, res);
})

module.exports = router;