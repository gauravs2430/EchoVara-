const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('../models/Products');
const User = require('../models/User');

dotenv.config({ path: './.env' });

const products = [
    {
        name: 'Sony WH-1000XM5',
        description: 'The best noise cancelling headphones in the market with 30-hour battery life.',
        price: 349.99,
        category: 'Noise-cancelling',
        images: [{ url: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=1000', altText: 'Sony Headphones' }],
        brand: 'Sony',
        stock: 50,
        isFeatured: true
    },
    {
        name: 'AirPods Max',
        description: 'Apple designed dynamic driver provides high-fidelity audio.',
        price: 549.00,
        category: 'Over-ear',
        images: [{ url: 'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?auto=format&fit=crop&q=80&w=1000', altText: 'AirPods Max' }],
        stock: 30,
        isFeatured: true
    },
    {
        name: 'Bose QuietComfort 45',
        description: 'Iconic quiet, comfort, and sound.',
        price: 329.00,
        category: 'Noise-cancelling',
        images: [{ url: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=1000', altText: 'Bose QC45' }],
        stock: 45
    },
    {
        name: 'Sennheiser Momentum 4',
        description: 'Audiophile-inspired sound with 60-hour battery life.',
        price: 379.95,
        category: 'Wireless',
        images: [{ url: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=1000', altText: 'Sennheiser' }],
        stock: 25,
        isFeatured: true
    }
];

const seedProducts = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/echovara', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB Connected for Seeding');

        await Product.deleteMany();
        console.log('Products deleted');

        await Product.insertMany(products);
        console.log('Products added');

        process.exit();
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}

seedProducts();
