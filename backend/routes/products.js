const express = require('express');
const router = express.Router();
const {
    getProducts,
    getProductById,
    getFeaturedProducts,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/productController');

// Helper middleware for auth (can be improved later)
// const { protect, authorize } = require('../middleware/auth');

router.route('/')
    .get(getProducts)
    .post(createProduct);

router.route('/featured/featured').get(getFeaturedProducts);

router.route('/:id')
    .get(getProductById)
    .put(updateProduct)
    .delete(deleteProduct);

module.exports = router;
