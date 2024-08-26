const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to user
        ref: 'Users',
        required: true
    },
    feedback: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Feedback", feedbackSchema);
