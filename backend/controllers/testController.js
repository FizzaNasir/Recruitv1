const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const Test = require('../models/testModel');

// Create a new test
exports.createTest = catchAsync(async (req, res, next) => {
    // Data validation on Server Side
    const {title, description, questions, answers, time} = req.body;
    if (!title || !description || !questions || !answers || !time) {
        return next(new AppError('Please provide all the fields', 400));
    }
    // Create a new test in the database using the data from the request body
    const newTest = await Test.create({
        title,
        description,
        questions,
        answers,
        time
    });

    res.status(201).json({
        status: 'success',
        data: {
            test: newTest
        }
    });
});

// Get a test
exports.getTest = catchAsync(async (req, res, next) => {
    const test = await Test.findById(req.params.id);
    if (!test) {
        return next(new AppError('No test found with that ID', 404));
    }
    res.status(200).json({
        status: 'success',
        data: {
            test
        }
    });
});