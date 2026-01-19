import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FiShoppingCart } from 'react-icons/fi';

const Navbar = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/products', label: 'Products' },
        { path: '/about', label: 'About' },
        { path: '/contact', label: 'Contact' }
    ];

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            background: scrolled
                ? 'rgba(13, 13, 13, 0.8)'
                : 'rgba(5, 5, 5, 0.6)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderBottom: `1px solid ${scrolled ? 'rgba(0, 255, 157, 0.2)' : 'rgba(255, 255, 255, 0.05)'}`,
            padding: '1rem 2rem',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: scrolled ? '0 10px 40px rgba(0, 255, 157, 0.1)' : 'none'
        }}>
            <div style={{
                maxWidth: '1400px',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                {/* Logo */}
                <Link
                    to="/"
                    style={{
                        fontSize: '1.75rem',
                        fontWeight: '800',
                        background: 'linear-gradient(135deg, #00ff9d 0%, #00d4aa 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        letterSpacing: '-0.02em',
                        textDecoration: 'none',
                        position: 'relative',
                        textShadow: '0 0 30px rgba(0, 255, 157, 0.3)'
                    }}
                >
                    Echovara
                </Link>

                {/* Nav Links */}
                <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
                    {navLinks.map(({ path, label }) => {
                        const isActive = location.pathname === path;
                        return (
                            <Link
                                key={path}
                                to={path}
                                style={{
                                    color: isActive ? '#00ff9d' : 'rgba(255, 255, 255, 0.7)',
                                    textDecoration: 'none',
                                    fontSize: '0.95rem',
                                    fontWeight: isActive ? '600' : '500',
                                    letterSpacing: '0.02em',
                                    position: 'relative',
                                    padding: '0.5rem 0',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                                }}
                                onMouseEnter={(e) => {
                                    if (!isActive) {
                                        e.target.style.color = '#00ff9d';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (!isActive) {
                                        e.target.style.color = 'rgba(255, 255, 255, 0.7)';
                                    }
                                }}
                            >
                                {label}
                                {isActive && (
                                    <div style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        height: '2px',
                                        background: 'linear-gradient(90deg, #00ff9d, #00d4aa)',
                                        boxShadow: '0 0 10px rgba(0, 255, 157, 0.6)',
                                        borderRadius: '2px'
                                    }} />
                                )}
                            </Link>
                        );
                    })}

                    {/* Cart */}
                    <Link
                        to="/cart"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            color: location.pathname === '/cart' ? '#00ff9d' : 'rgba(255, 255, 255, 0.7)',
                            textDecoration: 'none',
                            fontSize: '0.95rem',
                            fontWeight: '500',
                            padding: '0.6rem 1.2rem',
                            background: location.pathname === '/cart'
                                ? 'rgba(0, 255, 157, 0.15)'
                                : 'rgba(255, 255, 255, 0.05)',
                            border: `1px solid ${location.pathname === '/cart' ? 'rgba(0, 255, 157, 0.3)' : 'rgba(255, 255, 255, 0.1)'}`,
                            borderRadius: '8px',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            position: 'relative'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(0, 255, 157, 0.15)';
                            e.currentTarget.style.borderColor = 'rgba(0, 255, 157, 0.4)';
                            e.currentTarget.style.color = '#00ff9d';
                            e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 255, 157, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                            if (location.pathname !== '/cart') {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                                e.currentTarget.style.boxShadow = 'none';
                            }
                        }}
                    >
                        <FiShoppingCart size={18} />
                        <span>Cart</span>
                        {cartItems.length > 0 && (
                            <div style={{
                                position: 'absolute',
                                top: '-6px',
                                right: '-6px',
                                background: 'linear-gradient(135deg, #00ff9d 0%, #00d4aa 100%)',
                                color: '#000',
                                fontSize: '0.7rem',
                                fontWeight: '700',
                                width: '20px',
                                height: '20px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 0 15px rgba(0, 255, 157, 0.6)',
                                animation: 'pulse-glow 2s ease-in-out infinite'
                            }}>
                                {cartItems.length}
                            </div>
                        )}
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
