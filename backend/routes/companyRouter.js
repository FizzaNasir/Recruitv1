const express = require('express');
const multer = require('multer');
const fs=require('fs');

const path = require('path');
const crypto = require('crypto');
const companyController = require('../controllers/companyController');

const router = express.Router();

const randomString = crypto.randomBytes(8).toString('hex');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    fs.mkdir('./images',(err)=>{
      cb(null, './images');
   });
  },
  filename: function(req, file, cb) {
    
    cb(null, new Date().toISOString().replace(/:/g, '-')+randomString+file.originalname);
  }
});

const upload = multer({ storage: storage });
router.post(
  '/register',
  upload.single('Logo'),
  companyController.createCompany
);

router.get('/company_dashboard/:id', companyController.getCompany)
module.exports = router;
