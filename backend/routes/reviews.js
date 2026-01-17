const express = require('express');
const router = express.Router();
const {
    createProductReview,
    getProductReviews
} = require('../controllers/reviewController');

// const { protect } = require('../middleware/auth');

router.route('/').post(createProductReview); // Should be PUT according to controller/frontend? Controller uses PUT logic but post request. Let's make it POST to match standard REST or PUT if updating product. Frontend calling POST usually.
router.route('/product/:id').get(getProductReviews);

module.exports = router;
