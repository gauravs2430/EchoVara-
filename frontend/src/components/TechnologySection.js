import React from 'react';
import { motion } from 'framer-motion';

const TechnologySection = () => {
    const features = [
        {
            icon: '🎧',
            title: 'Active Noise Cancellation',
            description: 'Industry-leading ANC technology blocks out ambient noise'
        },
        {
            icon: '⚡',
            title: '60-Hour Battery',
            description: 'Extended playtime with fast charging capability'
        },
        {
            icon: '🎵',
            title: 'Hi-Res Audio',
            description: 'Studio-quality sound with premium drivers'
        },
        {
            icon: '📡',
            title: 'Bluetooth 5.3',
            description: 'Ultra-stable wireless connection with low latency'
        }
    ];

    return (
        <section style={{
            padding: '8rem 2rem',
            background: '#050505',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Animated Background */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '800px',
                height: '800px',
                background: 'radial-gradient(circle, rgba(0, 255, 157, 0.05) 0%, transparent 70%)',
                pointerEvents: 'none'
            }}></div>

            <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '5rem' }}
                >
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                        fontWeight: '800',
                        letterSpacing: '-0.03em',
                        color: '#fff',
                        marginBottom: '1rem',
                        textShadow: '0 0 40px rgba(0, 255, 157, 0.2)'
                    }}>
                        Advanced Technology
                    </h2>
                    <p style={{
                        fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                        color: 'rgba(255,255,255,0.5)',
                        maxWidth: '700px',
                        margin: '0 auto',
                        fontWeight: '300'
                    }}>
                        Cutting-edge features engineered for the ultimate listening experience
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem'
                }}>
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            style={{
                                padding: '3rem 2rem',
                                background: 'linear-gradient(145deg, rgba(13,13,13,0.6) 0%, rgba(10,10,10,0.4) 100%)',
                                border: '1px solid rgba(255,255,255,0.05)',
                                borderRadius: '16px',
                                textAlign: 'center',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                backdropFilter: 'blur(10px)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(0, 255, 157, 0.3)';
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 255, 157, 0.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <div style={{
                                fontSize: '3.5rem',
                                marginBottom: '1.5rem',
                                filter: 'grayscale(1) brightness(1.5)'
                            }}>
                                {feature.icon}
                            </div>
                            <h3 style={{
                                fontSize: '1.4rem',
                                fontWeight: '700',
                                color: '#fff',
                                marginBottom: '1rem',
                                letterSpacing: '-0.02em'
                            }}>
                                {feature.title}
                            </h3>
                            <p style={{
                                fontSize: '1rem',
                                color: 'rgba(255,255,255,0.5)',
                                lineHeight: '1.6',
                                fontWeight: '300'
                            }}>
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechnologySection;
