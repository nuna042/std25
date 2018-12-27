var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Person = new Schema({
  fName: {
    type: String
  },
  lName: {
    type: String
  },
  mobilePhone: {
      type: String
  }
},{
    collection: 'persons'
});

module.exports = mongoose.model('Person', Person);