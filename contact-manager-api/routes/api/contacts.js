var express = require('express');
var router = express.Router();

// req method, req url, url params, query params, req header 

// http methods - GET, POST, PUT, PATCH, DELETE 

/* GET api/contacts API End Point. */
router.get('/', (req, res, next) => {
  console.log("==========");
  let contactObj = {
    contacts: [
      { name: 'Arun', phone: 4234132, email: 'a@b.com'},
      { name: 'Vj', phone: 3452345, email: 'c@d.com'}
    ]
  };

  res.json( contactObj );
});

/* POST api/contacts API End Point. */
router.post('/', (req, res, next) => {
  console.log('Inside Contacts Post Method');
  console.log(req.body);
  
  let status = {
    data: req.body,
    msg: 'Saved Successfully!'
  }

  res.json(status);
});

router.get('/1', (req, res, next) => {
  res.json( { id: 1, name: 'Arun', phone: 4234132, email: 'a@b.com'} );
});

router.put('/1', (req, res, next) => {
  console.log(req.body);
  let status = {
    data: req.body,
    msg: 'Updated Successfully!'
  }

  res.json( status );
});


module.exports = router;
