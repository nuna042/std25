var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Person = new Schema({
  cid: { type: String },
  titleName: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  gender: { type: String },
  dob: { type: Date },
  addr1: { type: String },
  addr2: { type: String },
  changwat: { type: String },
  amphoe: { type: String },
  tambon: { type: String },
  phoneNumber: { type: String },
  create: { type: Date },
  update: { type: Date, default: Date.now },
}, {
    collection: 'persons'
  });

module.exports = mongoose.model('Person', Person);