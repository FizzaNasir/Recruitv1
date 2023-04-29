const dotenv = require('dotenv')
process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.stack);
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: './config.env' });
const app = require('./app');
const connectDB = require('./dbConnection');

// Connect to the database
connectDB();

console.log('first');
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

/** 
  Unhandled Rejections are errors that are not caught by the Promise   
  object. They are not handled by the .catch() method.
  For example:
  DB Failures (e.g. wrong password)
*/
process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
