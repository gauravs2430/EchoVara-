import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFeaturedProducts } from '../store/slices/productSlice';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
    const dispatch = useDispatch();
    const { featured, loading } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchFeaturedProducts());
    }, [dispatch]);

    if (loading) return <div style={{ padding: '2rem', textAlign: 'center' }}>Loading...</div>;

    return (
        <section style={{ padding: '4rem 2rem' }}>
            <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem' }}>Featured Products</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
                {featured.map((product) => (
                    <Link key={product._id} to={`/product/${product._id}`} style={{ background: '#1a1a1a', borderRadius: '8px', overflow: 'hidden', transition: 'transform 0.3s' }}>
                        <img src={product.images[0]?.url} alt={product.name} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                        <div style={{ padding: '1.5rem' }}>
                            <h3 style={{ marginBottom: '0.5rem' }}>{product.name}</h3>
                            <p style={{ color: '#00ff9d', fontSize: '1.5rem', fontWeight: 'bold' }}>${product.price}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default FeaturedProducts;
