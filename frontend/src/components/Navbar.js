import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const cartItems = useSelector((state) => state.cart.items);

    return (
        <nav style={{ background: '#111', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#00ff9d' }}>
                Echovara
            </Link>
            <div style={{ display: 'flex', gap: '2rem' }}>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/cart">Cart ({cartItems.length})</Link>
            </div>
        </nav>
    );
};

export default Navbar;
