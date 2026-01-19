import React from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Sarah Chen',
            role: 'Audio Engineer',
            image: '👩‍💼',
            rating: 5,
            text: 'The sound quality is absolutely phenomenal. These headphones have become an essential part of my studio setup.'
        },
        {
            name: 'Marcus Rodriguez',
            role: 'Music Producer',
            image: '👨‍🎤',
            rating: 5,
            text: 'Best headphones I\'ve ever owned. The noise cancellation is incredible and the battery life is unmatched.'
        },
        {
            name: 'Emily Watson',
            role: 'Podcast Host',
            image: '👩‍🎨',
            rating: 5,
            text: 'Crystal clear audio and supreme comfort. I can wear these for hours during recording sessions without any fatigue.'
        }
    ];

    return (
        <section style={{
            padding: '8rem 2rem',
            background: 'linear-gradient(180deg, #0a0a0a 0%, #050505 100%)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Grid Background */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `
                    linear-gradient(rgba(0, 255, 157, 0.02) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0, 255, 157, 0.02) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px',
                opacity: 0.4,
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
                            Testimonials
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
                        Loved by Professionals
                    </h2>
                    <p style={{
                        fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                        color: 'rgba(255,255,255,0.5)',
                        maxWidth: '700px',
                        margin: '0 auto',
                        fontWeight: '300'
                    }}>
                        See what industry experts are saying about Echovara
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            style={{
                                padding: '3rem 2.5rem',
                                background: 'linear-gradient(145deg, rgba(13,13,13,0.8) 0%, rgba(10,10,10,0.6) 100%)',
                                border: '1px solid rgba(255,255,255,0.05)',
                                borderRadius: '20px',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                backdropFilter: 'blur(10px)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(0, 255, 157, 0.3)';
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 25px 70px rgba(0, 255, 157, 0.12)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            {/* Quote Mark */}
                            <div style={{
                                position: 'absolute',
                                top: '20px',
                                right: '20px',
                                fontSize: '6rem',
                                color: 'rgba(0, 255, 157, 0.08)',
                                fontFamily: 'Georgia, serif',
                                lineHeight: 1,
                                pointerEvents: 'none'
                            }}>
                                "
                            </div>

                            {/* Stars */}
                            <div style={{
                                display: 'flex',
                                gap: '0.3rem',
                                marginBottom: '1.5rem'
                            }}>
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <FiStar
                                        key={i}
                                        size={18}
                                        fill="#00ff9d"
                                        color="#00ff9d"
                                        style={{
                                            filter: 'drop-shadow(0 0 4px rgba(0, 255, 157, 0.6))'
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <p style={{
                                fontSize: '1.1rem',
                                color: 'rgba(255,255,255,0.8)',
                                lineHeight: '1.7',
                                marginBottom: '2rem',
                                fontStyle: 'italic',
                                fontWeight: '300'
                            }}>
                                {testimonial.text}
                            </p>

                            {/* Divider */}
                            <div style={{
                                width: '100%',
                                height: '1px',
                                background: 'linear-gradient(90deg, transparent, rgba(0, 255, 157, 0.3), transparent)',
                                marginBottom: '1.5rem'
                            }}></div>

                            {/* Author */}
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem'
                            }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '12px',
                                    background: 'linear-gradient(135deg, rgba(0, 255, 157, 0.2) 0%, rgba(0, 212, 170, 0.1) 100%)',
                                    border: '2px solid rgba(0, 255, 157, 0.3)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.5rem',
                                    boxShadow: '0 0 20px rgba(0, 255, 157, 0.2)'
                                }}>
                                    {testimonial.image}
                                </div>
                                <div>
                                    <div style={{
                                        fontSize: '1.1rem',
                                        fontWeight: '700',
                                        color: '#fff',
                                        marginBottom: '0.2rem'
                                    }}>
                                        {testimonial.name}
                                    </div>
                                    <div style={{
                                        fontSize: '0.9rem',
                                        color: 'rgba(0, 255, 157, 0.7)',
                                        fontWeight: '500'
                                    }}>
                                        {testimonial.role}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
