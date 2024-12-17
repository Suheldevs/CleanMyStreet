const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
    uniqueId: {
        type: String,
        default: () => {
            return Math.random().toString(36).substring(2, 8);
        },
        unique: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        default: 'Default Complaint Description',
    },
    location: {
        type: { type: String, default: 'Point' },
        coordinates: [Number],
    },
    imageUrl: {
        type: String,
        required:true,
    },
    status: {
        type: String,
        enum: ['Pending', 'Approved By Admin', 'Rejected By Admin'],
        default: 'Pending',
    },
    level1Status: {
        type: String,
        enum: ['Pending', 'Resolved', 'Rejected'],
        default: 'Pending',
    },
    level2Status: {
        type: String,
        enum: ['Pending', 'Resolved', 'Rejected'],
        default: 'Pending',
    },
    level3Status: {
        type: String,
        enum: ['Pending', 'Resolved','Rejected'],
        default: 'Pending',
    },
    level1Email: {
        type: String,
        default: 'garbage@nagarpalika.in',
    },
    level2Email: {
        type: String,
        default: 'regional.dm@state.gov.in',
    },
    level3Email: {
        type: String,
        default: 'chiefminister@state.gov.in',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    rejecteByAdmin: {
        type: Date,
    },
    level1ResolvedAt: {
        type: Date,
    },
    level2ResolvedAt: {
        type: Date,
    },
    level3ResolvedAt: {
        type: Date,
    },
});

const complaintModel = mongoose.model('Complaint', complaintSchema);
module.exports = complaintModel
