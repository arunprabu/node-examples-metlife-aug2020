/*
    1. get the req from the service 
    2. construct the query & execute 
    3. get the data from db 
    4. send it to routes 
*/


// Establish handshake with DB (from services)
var Contact = require("../models/contact"); // open up a connection with db

//get All contacts
exports.getContacts = function ( callback) {  // 1. get the req from the service 
  console.log('Inside getContacts of contactService');

  // 2. construct the query & execute 
  Contact.find((err, data)=>{
    if(!err){
      console.log(data);
    }else{
      console.log(err);
    }
    // 3. send the data from db as part of resp -- send it to routes 
    callback(err, data);
  });
}

//get getContactsCount
exports.getContactsCount = function ( callback) {  // 1. get the req from the service 
  console.log('Inside getContactsCount of contactService');


  // 2. construct the query & execute 
  Contact.find((err, data)=>{
    if(!err){
      console.log(data.length);
    }else{
      console.log(err);
    }
    // 3. send the data from db as part of resp -- send it to routes 
    callback(err, data.length);
  });
}

//Create one Contact  -- get the form data from routes
exports.createContact = function (contactData, callback) {
  console.log('Inside createContact of contactService');
  console.log(contactData);

  // 2. save the contactData in the contact collection in mongodB 
  var contactDao = new Contact(contactData);
  contactDao.save( (err, data) => {
    if(!err){
      console.log(data);
    }else{
      console.log(err);
    }
    // 3. send the data from db as part of resp 

    callback(err, data);
  });  
}

//Get one Contact --- get id from routes
exports.getContactById = function (id, callback) {
  console.log(id);

  Contact.findOne( {contactId: id}, (err, data)=>{
    if(!err){
      console.log(data);
    }else{
      console.log(err);
    }
    callback(err, data);
  });
}

//Update one Contact  -- get the updatable form data from routes
exports.updateContact = function (_contactId, _contactData, callback) {
  console.log(_contactId);
  console.log(_contactData);

  Contact.updateOne({contactId: _contactId}, _contactData, (err, data)=>{
    if(!err){
      console.log(data);
    }else{
      console.log(err);
    }
    callback(err, data);
  });
}

// todo: 
// deleteContact -- soft delete means a put req 

// deleteContacts -- soft delete means a put req 

// contacts count 

// search contacts 


// upload 

// work with mysql 

// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '',
//   database : 'my_db'
// });
 
// connection.connect();
 

// exports.getContactsFromMySQL = function ( callback) {  // 1. get the req from the service 
//   console.log('Inside getContactsFromMySQL of contactService');

//   connection.query('select * from ',  (err, data)=>{

//   })
// }
