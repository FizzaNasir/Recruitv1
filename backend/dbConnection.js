const mongoose = require('mongoose');
const dotenv = require('dotenv');
const catchAsync = require('./utils/catchAsync');

// For loading environment variables from a .env file into process.env
dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
// function to connect to the database
const connectDB = catchAsync(async () => {
  // connect to the database
  await mongoose.connect(DB, {
    useNewUrlParser: true,
    strictQuery: true
  });
  console.log('DB connection successful!');
});

module.exports = connectDB;
