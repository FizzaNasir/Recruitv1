const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
  companyname: {
    type: String,
    required: [true, 'Please enter Company name']
  },
  HeadName: {
    type: String,
    required: [true, 'Please enter Head name']
  },
  Website: {
    type: String,
    required: [true, 'Please enter company name']
  },
  Email: {
    type: String,
    required: [true, 'Please enter company name']
  },
  Phone: {
    type: Number,
    required: [true, 'Please enter company name']
  },
  Logo: {
    type: String,
    required: [true, 'Please enter company name']
  },
  OrganizationSize: {
    type: String,
    required: [true, 'Please enter company name']
  },
  OrganizationType: {
    type: String,
    required: [true, 'Please provide Organization type for the job'],
    enum: ['public', 'private', 'self-employed', 'government']
  },
  Description: {
    type: String,
    required: [true, 'Please provide skills for the job']
  },
  OtherUrls: {
    type: String
  }
});

// Export the model
module.exports = mongoose.model('Company', CompanySchema);
