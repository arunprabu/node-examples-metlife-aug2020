/*
    1. get the req from the service 
    2. construct the query & execute 
    3. get the data from db 
    4. send it to routes 
*/

//get All contacts
exports.getContacts = function (callback) {  // 1. get the req from the service 
  console.log('Inside getContacts of contactService')

  console.log(typeof callback); // function

  // 2. construct the query & execute 
  // 3. get the data from db 
  let contactObj = {
    contacts: [
      { name: 'Arun', phone: 4234132, email: 'a@b.com' },
      { name: 'Vj', phone: 3452345, email: 'c@d.com' }
    ]
  };

  let err;

  if (!err) {
    console.log('Data fetched successfully!');
  }
  // 4. send it to routes 
  callback(err, contactObj);
}

//Create one Contact  -- get the form data from routes
exports.createContact = function (contactData, callback) {
  console.log(contactData);

  // 2. save the contactData  in dB 
  // 3. send the status from db
  let status = {
    data: contactData,
    msg: 'Created Successfully!'
  }

  callback(undefined, status);
}

//Get one Contact --- get id from routes
exports.getContactById = function (id, callback) {
  console.log(id);

  // 2. get the contactData for the id
  // 3. send the contactData from db
  let contact = {
    name: 'Arun',
    phone: 2532453,
    email: 'a@b.com'
  }

  callback(undefined, contact);
}

//Update one Contact  -- get the updatable form data from routes
exports.updateContact = function (contactId, contactData, callback) {
  console.log(contactId);
  console.log(contactData);

  // 2. update the contactData of the contactId in dB 
  // 3. send the status from db
  let status = {
    data: contactData,
    msg: 'Updated Successfully!'
  }

  callback(undefined, status);
}

// deleteContact -- soft delete means a put req 

// deleteContacts -- soft delete means a put req 

// contacts count 

// search contacts 

