const Contact = require('../models/Contact');

// @desc    Send contact message
// @route   POST /api/contact
// @access  Public
exports.sendMessage = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        const contact = await Contact.create({
            name,
            email,
            subject,
            message
        });

        res.status(201).json({
            success: true,
            message: 'Message sent successfully',
            data: contact
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};
