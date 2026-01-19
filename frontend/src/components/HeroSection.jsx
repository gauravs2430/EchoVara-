import React from 'react';

const HeroSection = () => {
    return (
        <section style={{ padding: '6rem 2rem', textAlign: 'center', background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem', background: 'linear-gradient(45deg, #00ff9d, #00b8ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Premium Headphones
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#aaa' }}>Experience sound like never before</p>
        </section>
    );
};

export default HeroSection;
