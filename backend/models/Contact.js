const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name'],
        trim: true,
        maxLength: [50, 'Name cannot exceed 50 characters']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        trim: true
    },
    subject: {
        type: String,
        required: [true, 'Please enter a subject'],
        maxLength: [100, 'Subject cannot exceed 100 characters']
    },
    message: {
        type: String,
        required: [true, 'Please enter your message'],
        maxLength: [1000, 'Message cannot exceed 1000 characters']
    },
    status: {
        type: String,
        enum: ['New', 'Read', 'Replied'],
        default: 'New'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Contact', contactSchema);
