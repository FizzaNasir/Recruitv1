const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const Job = require('../models/jobModel');

/**
 * @desc    Post a job
 * @route   POST /recruuit/api/v1/jobs
 * @access  Private
 * @role    Recruiter
 * 
 * This function is used to post a job
 * 
 */
exports.createJob = catchAsync(async (req, res, next) => {
    // Data validation on Server Side
    const {title, description, location, salaryRange, mode, type, skills} = req.body;
    if (!title || !description || !location || !mode || !type || !skills) {
        return next(new AppError('Please provide all the fields', 400));
    }
    //  data maybe can include or not these fields : salaryRange
    if(salaryRange === '') {
        salaryRange = 'Not Disclosed';
    }
    // Create a new job in the database using the data from the request body
    const newJob = await Job.create({
        title,
        description,
        location,
        salaryRange,
        mode,
        type,
        skills
    });

    res.status(201).json({
        status: 'success',
        data: {
            job: newJob
        }
    });
});

exports.getAllJobs = catchAsync(async (req, res, next) => {
    const jobs = await Job.find();
    res.status(200).json({
        status: 'success',
        results: jobs.length,
        data: {
            jobs
        }
    });
}
);