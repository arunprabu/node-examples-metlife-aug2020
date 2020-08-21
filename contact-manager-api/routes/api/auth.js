const express = require('express');
const router = express.Router();

const authService = require('../../services/authService');

router.post('/signup', (req, res, next) => {  
  console.log('Inside signup Route');
  
  authService.signup( req , (err, data) => {
    if (!err) {
      res.json(data);
    } else {
      res.json(err);
    }
  })
});

router.post('/login', (req, res, next) => {  
  console.log('Inside login Routes');
  
  authService.login( req , (err, data) => {
    if (!err) {
      res.json(data);
    } else {
      res.json(err);
    }
  });
});

module.exports = router;

// contactService.getContacts( (err, data) => {
//   if (!err) {
//     res.json(data);
//   } else {
//     res.json(err);
//   }
// });