const complaintModel = require('../models/Complaint_Model');

const saveComplaint = async (req, res) => {
    try {
        const body = req.body;
        const image = req.file;

        if (!image) {
            return res.status(400).json({ message: 'Image is not uploaded' });
        }
        if (!body) {
            return res.status(400).json({ message: 'Bad request' });
        }
        if (!body.title || !body.description) {
            return res.status(400).json({ message: 'Title and description are required' });
        }
        const newComplaint = new complaintModel({
            ...body,
            imageUrl: image.filename
        });
        const complaintData = await newComplaint.save();

        res.status(200).json({
            message: 'Complaint reported successfully',
            complaintData
        });
    }
    catch (err) {
        res.status(500).json({
            message: 'Internal server error',
            Error: err
        });
    }
};

module.exports = { saveComplaint };
