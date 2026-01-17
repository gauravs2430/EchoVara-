import React from 'react';

const Testimonials = () => {
    return (
        <section style={{ padding: '4rem 2rem' }}>
            <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem' }}>What Our Customers Say</h2>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <p style={{ fontSize: '1.2rem', fontStyle: 'italic', color: '#ccc' }}>
                    "Best headphones I've ever owned. The sound quality is incredible!"
                </p>
                <p style={{ marginTop: '1rem', color: '#00ff9d' }}>- Happy Customer</p>
            </div>
        </section>
    );
};

export default Testimonials;
