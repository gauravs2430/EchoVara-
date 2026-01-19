import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFeaturedProducts } from '../store/slices/productSlice';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const FeaturedProducts = () => {
    const dispatch = useDispatch();
    const { featured, loading } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchFeaturedProducts());
    }, [dispatch]);

    if (loading) return (
        <div style={{ padding: '4rem 2rem', textAlign: 'center', background: '#050505' }}>
            <div style={{
                width: '48px',
                height: '48px',
                border: '3px solid rgba(0, 255, 157, 0.2)',
                borderTopColor: '#00ff9d',
                borderRadius: '50%',
                animation: 'spin 0.8s linear infinite',
                margin: '0 auto'
            }}></div>
        </div>
    );

    return (
        <section style={{
            padding: '8rem 2rem',
            background: 'linear-gradient(180deg, #050505 0%, #0a0a0a 100%)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Grid */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `
          linear-gradient(rgba(0, 255, 157, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 157, 0.03) 1px, transparent 1px)
        `,
                backgroundSize: '50px 50px',
                opacity: 0.5,
                pointerEvents: 'none'
            }}></div>

            <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '5rem' }}
                >
                    <div style={{
                        display: 'inline-block',
                        padding: '8px 20px',
                        background: 'rgba(0, 255, 157, 0.1)',
                        border: '1px solid rgba(0, 255, 157, 0.3)',
                        borderRadius: '20px',
                        marginBottom: '1.5rem'
                    }}>
                        <span style={{
                            color: '#00ff9d',
                            fontSize: '12px',
                            fontWeight: '600',
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase'
                        }}>
                            Featured Collection
                        </span>
                    </div>
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                        fontWeight: '800',
                        letterSpacing: '-0.03em',
                        color: '#fff',
                        marginBottom: '1rem',
                        textShadow: '0 0 40px rgba(0, 255, 157, 0.2)'
                    }}>
                        Premium Selection
                    </h2>
                    <p style={{
                        fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                        color: 'rgba(255,255,255,0.5)',
                        maxWidth: '600px',
                        margin: '0 auto',
                        fontWeight: '300'
                    }}>
                        Handpicked excellence in audio engineering
                    </p>
                </motion.div>

                {/* Products Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {featured.map((product, index) => (
                        <motion.div
                            key={product._id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link
                                to={`/product/${product._id}`}
                                style={{
                                    display: 'block',
                                    background: 'linear-gradient(145deg, #0d0d0d 0%, #0a0a0a 100%)',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    position: 'relative',
                                    height: '100%'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-8px)';
                                    e.currentTarget.style.borderColor = 'rgba(0, 255, 157, 0.3)';
                                    e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 255, 157, 0.15)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                {/* Image Container */}
                                <div style={{
                                    position: 'relative',
                                    width: '100%',
                                    paddingTop: '75%',
                                    background: 'linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)',
                                    overflow: 'hidden'
                                }}>
                                    <img
                                        src={product.images[0]?.url}
                                        alt={product.name}
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                                        }}
                                        onMouseEnter={(e) => e.target.style.transform = 'scale(1.08)'}
                                        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                    />
                                    {/* Gradient Overlay */}
                                    <div style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        height: '50%',
                                        background: 'linear-gradient(to top, rgba(5,5,5,0.9), transparent)',
                                        pointerEvents: 'none'
                                    }}></div>
                                </div>

                                {/* Content */}
                                <div style={{ padding: '2rem' }}>
                                    <h3 style={{
                                        fontSize: '1.5rem',
                                        fontWeight: '700',
                                        color: '#fff',
                                        marginBottom: '0.75rem',
                                        letterSpacing: '-0.02em'
                                    }}>
                                        {product.name}
                                    </h3>

                                    <p style={{
                                        fontSize: '0.95rem',
                                        color: 'rgba(255,255,255,0.5)',
                                        marginBottom: '1.5rem',
                                        lineHeight: '1.6'
                                    }}>
                                        {product.description?.substring(0, 80)}...
                                    </p>

                                    {/* Price & CTA */}
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        paddingTop: '1.5rem',
                                        borderTop: '1px solid rgba(255,255,255,0.05)'
                                    }}>
                                        <div>
                                            <span style={{
                                                fontSize: '2rem',
                                                fontWeight: '800',
                                                background: 'linear-gradient(135deg, #00ff9d 0%, #00d4aa 100%)',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                backgroundClip: 'text'
                                            }}>
                                                ${product.price}
                                            </span>
                                        </div>
                                        <div style={{
                                            padding: '10px 24px',
                                            background: 'rgba(0, 255, 157, 0.1)',
                                            border: '1px solid rgba(0, 255, 157, 0.3)',
                                            borderRadius: '6px',
                                            color: '#00ff9d',
                                            fontSize: '0.85rem',
                                            fontWeight: '600',
                                            letterSpacing: '0.05em',
                                            textTransform: 'uppercase'
                                        }}>
                                            View
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    style={{ textAlign: 'center', marginTop: '5rem' }}
                >
                    <Link to="/products">
                        <button style={{
                            padding: '16px 48px',
                            background: 'transparent',
                            border: '2px solid rgba(0, 255, 157, 0.3)',
                            borderRadius: '8px',
                            color: '#00ff9d',
                            fontSize: '15px',
                            fontWeight: '700',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            cursor: 'pointer',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                            onMouseEnter={(e) => {
                                e.target.style.background = 'rgba(0, 255, 157, 0.1)';
                                e.target.style.borderColor = '#00ff9d';
                                e.target.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.background = 'transparent';
                                e.target.style.borderColor = 'rgba(0, 255, 157, 0.3)';
                                e.target.style.transform = 'translateY(0)';
                            }}
                        >
                            View All Products
                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
