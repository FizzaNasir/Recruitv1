const express = require('express');

const jobController = require('../controllers/jobController');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/createJob', jobController.createJob);
router.get('/getAllJobs', jobController.getAllJobs);



//router.get('/getJobs', jobController.getJobs);
//router.get('/getJobs', jobController.getJobs);
//router.get('/getJob/:id', jobController.getJob);
//router.patch('/updateJob/:id', jobController.updateJob);
//router.delete('/deleteJob/:id', jobController.deleteJob);



module.exports = router;
    