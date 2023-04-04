const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
  companyname: {
    type: String,
    required: [true, 'Please enter Company name'],
    // unique: true
  },
  HeadName: {
    type: String,
    required: [true, 'Please enter Head name']
  },
  Website: {
    type: String,
    required: [true, 'Please enter website'],
    // unique: true
  },
  Email: {
    type: String,
    required: [true, 'Please enter email'],
    // unique: true
  },
  Phone: {
    type: String,
    required: [true, 'Please enter phone']
  },
  EstablishedSince: {
    type: String,
    required: [true, 'Please fill out this field']
  },
  OrganizationSize: {
    type: Number,
    required: [true, 'Please enter Organization Size']
  },
  OrganizationType: {
    type: String,
    required: [true, 'Please provide Organization type for the job'],
    enum: ['public', 'private', 'self-employed', 'government']
  },
  Description: {
    type: String,
    required: [true, 'Please provide company description']
  },
  url: [Object],
  Logo: {
    type: String
  }
});
// Export the model
module.exports = mongoose.model('Company', CompanySchema);
