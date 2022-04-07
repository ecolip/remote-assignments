const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  let { name } = req.cookies;
  if (name) {
    console.log("message: redirect to myName", `name: ${name}`);
    res.render('myName', { name }); // can't render myName.pug?
  } else {
    res.render('myName');
  }
});

router.post('/', function (req, res, next) {
  let { username, password } = req.body;
  let name = username.trim();
  let pass = password.trim();
  if (name.length > 0 && pass.length > 0) {
    res.render('myName', { name });
  } else {
    res.render('myName', { error: `Name and password can't be empty!` });
  }
});

module.exports = router;