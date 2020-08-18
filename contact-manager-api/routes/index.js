var express = require('express');
var router = express.Router();


// req method, req url, url params, query params, req header 

// http methods - GET, POST, PUT, PATCH, DELETE 

/* GET home page. */
router.get('/', (req, res, next) => {
  console.log("Inside Index ==========");
  res.render('index', { title: 'Contact Manager App!' });
});

module.exports = router;
