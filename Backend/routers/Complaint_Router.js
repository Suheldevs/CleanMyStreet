const {saveComplaint,getAllComplaints,updateComplaints} = require('../controllers/Complaint_Controller');
const upload = require('../config/multer')
const express = require('express')
const router = express.Router()

router.post('/save',upload.single('image'), saveComplaint)
router.get('/get', getAllComplaints)
router.put('/update/:id', updateComplaints)

module.exports = router;