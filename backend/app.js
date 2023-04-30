// const path = require('path');
const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
// const hpp = require('hpp');
const cors = require('cors');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const userRouter = require('./routes/userRouter');
const jobRouter = require('./routes/jobRouter');
const testRouter = require('./routes/testRouter');
const companyRegRouter = require('./routes/companyRouter');

// Start express app
const app = express();
app.use(cors());

// 1) GLOBAL MIDDLEWARES - for increasing security
/* 
  Set security HTTP headers
  Allows us to set security headers on our response
*/
app.use(helmet());

// Limit requests from same API, to prevent brute force attacks

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000, // 100 requests per hour
  message: 'Too many requests from this IP, please try again in an hour!'
});
app.use('/api', limiter);

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
// set app to send only json not views
// app.use(express.static(path.join(__dirname, 'public')));

// Data sanitizat ion against NoSQL query injection, will remove all $ and . from the body
app.use(mongoSanitize());

// Data sanitization against XSS attacks, will remove all html tags from the body
app.use(xss());

// eslint-disable-next-line prettier/prettier

// app.use(express.static(__dirname))
app.use('/public', express.static('public'));

// Routes Starts from here
app.use('/recruuit/v1/users', userRouter);
app.use('/recruuit/v1/jobs', jobRouter);
app.use('/recruuit/v1/tests', testRouter);
app.use('/recruuit/v1/company', companyRegRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
