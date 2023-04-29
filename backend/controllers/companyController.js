/* eslint-disable prettier/prett  ier */
/* eslint-disable camelcase */
// const { useEffect } = require('react');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const company = require('../models/companyModel');

/**
 * @desc    Post a job
 * @route   POST /recruuit/api/v1/jobs
 * @access  Private
 * @role    Recruiter
 *
 * This function is used to post a job
 *
 */
exports.createCompany = catchAsync(async (req, res, next) => {
  const {
    companyname,
    HeadName,
    Website,
    Email,
    Phone,
    OrganizationSize,
    OrganizationType,
    Description,
    EstablishedSince,
    url
  } = req.body;

  const Logo= `backend/images/${req.file.filename}`
  
  if (
    !companyname ||
    !HeadName ||
    !Website ||
    !Email ||
    !Phone ||
    !OrganizationSize ||
    !OrganizationType ||
    !Description ||
    !EstablishedSince
  ) 
  {
    return next(new AppError('Please provide all the fields', 400));
  }
 
  const newCompany = await company.create({
    companyname,
    HeadName,
    Website,
    Email,
    Phone,
    OrganizationSize,
    OrganizationType,
    Description,
    EstablishedSince,
    url,
    Logo
  });
  try {
    res.status(201).json({
      status: 'success',
      data: {
        company: newCompany
      }
    });
  } catch (err) {
    //400 stands for bad request
    res.status(400).json({
      status: 'failed',
      message: err
    });
  }
});

exports.getCompany = catchAsync(async(req,res,next)=>{
const company = await company.findById(req.params.id)
if (!company) {
  return next(new AppError('No company found with that ID', 404));
}
res.status(200).json({
  status:'json',
  data:{
    company
  }
})
})