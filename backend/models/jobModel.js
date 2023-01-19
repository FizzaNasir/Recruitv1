const mongoose = require('mongoose');
const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide a title for the job']
    },
    description: {
        type: String,
        required: [true, 'Please provide a description for the job']
    },
    location: {
        type: String,
        required: [true, 'Please provide a location for the job']
    },
    salaryRange: {
        type: String,
        default: 'Not Disclosed'
    },
    mode : {
        type: String,
        required: [true, 'Please provide a mode for the job'],
        enum: ['Remote', 'Onsite', 'Both' ]
    },
    type: {
        type: String,
        required: [true, 'Please provide a type for the job'],
        enum: ['Full-Time', 'Part-time', 'Contract', 'Internship', 'Other' ]
    },
    skills: {
        type: [String],
        required: [true, 'Please provide skills for the job'],
        default: []
    },
    datePosted: {
        type: Date,
        default: Date.now()
    },
    // Next Part is for the test of this job
    test: {
        type: mongoose.Schema.ObjectId,
        ref: 'Test'
        },
    
});
    
const Job = mongoose.model('Job', jobSchema);
module.exports = Job;