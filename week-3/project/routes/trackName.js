const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  let { name } = req.query;
  if (!name) {
    res.render('trackName');
  } else {
    res.cookie('name', name, {
      maxAge: 100000, //100s
      httpOnly: true // client can't access
    });
    res.redirect('/myName');
  }
});

module.exports = router;