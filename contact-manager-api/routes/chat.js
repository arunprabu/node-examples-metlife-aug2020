var express = require('express');
var router = express.Router();

/* GET chat page. */
router.get('/', (req, res, next) => {
  res.render('chat', { title: 'Websocket based app' });
});

module.exports = router;
