import React from 'react';

const Newsletter = () => {
    return (
        <section style={{ padding: '4rem 2rem', background: '#0d0d0d', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Subscribe to Our Newsletter</h2>
            <p style={{ color: '#aaa', marginBottom: '2rem' }}>Get the latest updates and exclusive offers</p>
            <input
                type="email"
                placeholder="Enter your email"
                style={{ padding: '0.75rem 1.5rem', borderRadius: '4px', border: '1px solid #333', background: '#1a1a1a', color: '#fff', marginRight: '1rem', minWidth: '300px' }}
            />
            <button style={{ padding: '0.75rem 2rem', background: '#00ff9d', color: '#000', borderRadius: '4px', fontWeight: 'bold' }}>
                Subscribe
            </button>
        </section>
    );
};

export default Newsletter;
