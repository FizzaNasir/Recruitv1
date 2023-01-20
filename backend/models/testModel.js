const mongoose = require('mongoose');
const testSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide a title for the test']
    },
    description: {
        type: String,
        required: [true, 'Please provide a description for the test']
    },
    time : {
        type: Number,
        required: [true, 'Please provide a time for the test'],
        },
    noOfQuestions: {
        type: Number,
        required: [true, 'Please provide a number of questions for the test'],
    },
    questions: {
        type: [Object],
        required: [true, 'Please provide questions for the test'],
        default: []
    },
 
});

const Test = mongoose.model('Test', testSchema);
module.exports = Test;