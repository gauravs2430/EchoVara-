const express = require('express');
const router = express.Router();
const {
    createOrder,
    getSingleOrder,
    myOrders
} = require('../controllers/orderController');

// const { protect } = require('../middleware/auth');

router.route('/').post(createOrder);
router.route('/myOrders').get(myOrders);
router.route('/:id').get(getSingleOrder);

module.exports = router;
