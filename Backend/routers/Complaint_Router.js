const {saveComplaint,getAllComplaints} = require('../controllers/Complaint_Controller');
const upload = require('../config/multer')
const express = require('express')
const router = express.Router()

router.post('/save',upload.single('image'), saveComplaint)
router.get('/get', getAllComplaints)

module.exports = router;