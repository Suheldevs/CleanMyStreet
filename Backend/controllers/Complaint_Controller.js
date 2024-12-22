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

const getAllComplaints = async (req, res) => {
    try {
        const complaints = await complaintModel.find();
        res.status(200).json({
            message: 'Complaints fetched successfully',
            complaints,
        });
    } catch (err) {
        res.status(500).json({
            message: 'Internal server error',
            Error: err.message,
        });
    }
};

const updateComplaints = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: 'You are not allowed to update' });
        }

        const body = req.body;
        if (!body.title || !body.description) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const updatedData = await complaintModel.findByIdAndUpdate(
            id,
            body,
            { new: true }
        );

        if (!updatedData) {
            return res.status(404).json({ message: 'Complaint not found' });
        }

        res.status(200).json({ message: 'Update successful', updatedData });
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error', error: err.message });
    }
};



module.exports = { saveComplaint, getAllComplaints, updateComplaints };
