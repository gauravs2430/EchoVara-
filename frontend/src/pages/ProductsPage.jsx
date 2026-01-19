import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/slices/productSlice';
import { Link } from 'react-router-dom';

const ProductsPage = () => {
    const dispatch = useDispatch();
    const { items, loading } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (loading) return <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>Loading products...</div>;

    return (
        <div style={{ padding: '4rem 2rem', minHeight: '80vh' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}>All Products</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
                {items.map((product) => (
                    <Link key={product._id} to={`/product/${product._id}`} style={{ background: '#1a1a1a', borderRadius: '8px', overflow: 'hidden' }}>
                        <img src={product.images[0]?.url} alt={product.name} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                        <div style={{ padding: '1.5rem' }}>
                            <h3>{product.name}</h3>
                            <p style={{ color: '#00ff9d', fontSize: '1.5rem', fontWeight: 'bold', marginTop: '0.5rem' }}>${product.price}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
