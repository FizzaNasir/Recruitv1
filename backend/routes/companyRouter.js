/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
const express = require('express');
const multer = require('multer');
const fs=require('fs');
// const upload = multer({dest: 'uploads/'})
const path = require('path');
const crypto = require('crypto');
const companyController = require('../controllers/companyController');

const router = express.Router();

const randomString = crypto.randomBytes(8).toString('hex');
// eslint-disable-next-line no-unused-vars
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    fs.mkdir('./images',(err)=>{
      cb(null, './images');
   });
  },
  filename: function(req, file, cb) {
    // cb(null, `${Date.now()}-${randomString}${path.extname(file.originalname)}`);
    // cb(null, Date.now()-randomString+path.extname(file.originalname));
    cb(null, new Date().toISOString().replace(/:/g, '-')+randomString+file.originalname);
    // cb(null, req.body.companyname+file.originalname);

  }
});

const upload = multer({ storage: storage });
router.post(
  '/register',
  upload.single('Logo'),
  companyController.createCompany
);

module.exports = router;
