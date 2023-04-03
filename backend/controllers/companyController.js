/* eslint-disable prettier/prettier */
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
  // console.log(req.body);
  // Data validation on Server Side
  // const NewUrl = `${req.protocol}://${req.get('host')}`
  const {
    companyname,
    HeadName,
    Website,
    Email,
    Phone,
    OrganizationSize,
    OrganizationType,
    Description,
    // eslint-disable-next-line camelcase
    EstablishedSince,
    url
  } = req.body;
  // const Logo= `${NewUrl}/public/${req.file.filename}`
  const Logo= `backend/images/${req.file.filename}`


  // eslint-disable-next-line prettier/prettier
  // const Logo=req.file.path;
  // useEffect(()=>{
  //   console.log(req.file.path)
  //   // console.log(inputFields)
  // })
  
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
  //  data maybe can include or not these fields : salaryRange
  // if (url.length === 0) {
  //   // no social meadia url provided;
  // }
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
