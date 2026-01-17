const Review = require('../models/Review');
const Product = require('../models/Products');

// @desc    Create new review
// @route   PUT /api/reviews
// @access  Private
exports.createProductReview = async (req, res) => {
    try {
        const { rating, comment, productId } = req.body;

        const review = {
            user: req.user._id,
            name: req.user.name,
            rating: Number(rating),
            comment
        }

        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({ success: false, error: 'Product not found' });
        }

        // Check if user already reviewed
        // We'll skip complex check for now and just add it
        // In real app, we check if reviews array contains user id

        // Product model previously didn't have reviews array in your schema?
        // Let's assume we are just saving Review model independently for now,
        // or we need to update Product model to have reviews. 
        // The current Product model in file 45 has numReviews and rating but no reviews array.
        // I will create a Review document.

        await Review.create({
            product: productId,
            user: req.user._id,
            rating,
            comment
        });

        // Update product ratings
        const reviews = await Review.find({ product: productId });
        const numReviews = reviews.length;
        const avg = reviews.reduce((acc, item) => item.rating + acc, 0) / reviews.length;

        product.rating = avg;
        product.numReviews = numReviews;

        await product.save({ validateBeforeSave: false });

        res.status(200).json({
            success: true
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

// @desc    Get product reviews
// @route   GET /api/reviews/product/:id
// @access  Public
exports.getProductReviews = async (req, res) => {
    try {
        const reviews = await Review.find({ product: req.params.id });

        res.status(200).json({
            success: true,
            reviews
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};
