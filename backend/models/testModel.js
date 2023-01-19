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
    questions: {
        type: [String],
        required: [true, 'Please provide questions for the test'],
        default: []
    },
    answers: {
        type: [String],
        required: [true, 'Please provide answers for the test'],
        default: []
    },
    time : {
        type: Number,
        required: [true, 'Please provide a time for the test'],
        }
});

const Test = mongoose.model('Test', testSchema);
module.exports = Test;