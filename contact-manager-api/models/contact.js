// creating a model for the collection : contact 
var autoIncrement = require('mongoose-auto-increment');

const mongoose = require('./mongo'); //importing connection config

const Schema = mongoose.Schema;

//schema 
var Contact = new Schema({
    // schema definition
    contactId: Number,  // will later become primary key
    fullName: String,  // todo: make this as mandatory field in mongoose
    phoneNo: Number,
    email: String,
    status: String,  // ACTIVE/INACTIVE 
    createdBy: String,
    createdOn: { type: Date, default: Date.now },
    updatedBy: String,
    updatedOn: { type: Date, default: Date.now }
}); 
// todo: strict schema 

// to set primary key
Contact.plugin(autoIncrement.plugin, {model: 'Contact', field: 'contactId', startAt: 1});

module.exports = mongoose.model('Contact', Contact);