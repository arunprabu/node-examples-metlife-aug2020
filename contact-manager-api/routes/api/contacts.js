const express = require('express');
const router = express.Router();
//var authUtil = require('../../utils/authUtil');

const contactService = require('../../services/contactService');
// const auth = require('../../utils/authUtil');

// req method, req url, url params, query params, req header 

// http methods - GET, POST, PUT, PATCH, DELETE 

/* 
  1. get the request from rest api client 
  2. connect to the service
  3. get the data from service  
  4. send it back to the rest api client 
*/

/* READ -- GET api/contacts API End Point. */
router.get('/', (req, res, next) => {  // 1. get the request from rest api client 
  console.log('Inside getContacts Routes');

  //2. connect to the service
  contactService.getContacts( (err, data) => {
    if (!err) {
      res.json(data);
    } else {
      res.json(err);
    }
  });

});

/* CREATE --  POST api/contacts API End Point. */
router.post('/', (req, res, next) => {
  console.log('Inside Contacts Post Method');
  console.log(req.body);
  
  contactService.createContact(req.body, (err, data) => {
    if (!err) {
      res.json(data);
    } else {
      res.json(err);
    }
  });
});

// api/contacts/count  -- todo: expected url localhost:3000/api/contacts/count?fullName=John
router.get('/mysql', (req, res, next) =>{
  console.log(req.query);
  
  contactService.getContactsFromMySQL( (err, data) => {
    if (!err) {
      res.json(data);
    } else {
      res.json(err);
    }
  });
});

// api/contacts/count  -- todo: expected url localhost:3000/api/contacts/count?fullName=John
router.get('/count', (req, res, next) =>{
  console.log(req.query);
  
  contactService.getContactsCount( (err, data) => {
    if (!err) {
      res.json(data);
    } else {
      res.json(err);
    }
  });
});

// READ -- api/contacts/:id      - anything other than search 
router.get('/:id', (req, res, next) => {
  // read url param from req 
  
  console.log(req.params.id);
  contactService.getContactById(req.params.id, (err, data) => {
    if (!err) {
      res.json(data);
    } else {
      res.json(err);
    }
  });
});

// UPDATE 
router.put('/:id', (req, res, next) => {
  console.log(req.params.id);
  console.log(req.body);
  
  contactService.updateContact(req.params.id, req.body, (err, data) => {
    if (!err) {
      res.json(data);
    } else {
      res.json(err);
    }
  });

});

// Todo: Delete 
router.delete('/:id', (req, res, next) =>{
  let status = {
    msg: 'Deleted Successfully!'
  }
  res.json( status );
});



module.exports = router;
