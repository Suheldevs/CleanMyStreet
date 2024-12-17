const {saveComplaint} = require('../controllers/Complaint_Controller');
const upload = require('../config/multer')
const express = require('express')
const router = express.Router()

router.post('/save',upload.single('image'), saveComplaint)

module.exports = router;