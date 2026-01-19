import React from 'react';
import { motion } from 'framer-motion';
import { FiHeadphones, FiBatteryCharging, FiMusic, FiRadio } from 'react-icons/fi';

const TechnologySection = () => {
    const features = [
        {
            icon: FiHeadphones,
            title: 'Active Noise Cancellation',
            description: 'Industry-leading ANC technology blocks out ambient noise',
            stat: '99%',
            statLabel: 'Noise Reduction'
        },
        {
            icon: FiBatteryCharging,
            title: '60-Hour Battery',
            description: 'Extended playtime with fast charging capability',
            stat: '60h',
            statLabel: 'Playtime'
        },
        {
            icon: FiMusic,
            title: 'Hi-Res Audio',
            description: 'Studio-quality sound with premium drivers',
            stat: '24bit',
            statLabel: 'Audio Quality'
        },
        {
            icon: FiRadio,
            title: 'Bluetooth 5.3',
            description: 'Ultra-stable wireless connection with low latency',
            stat: '10m',
            statLabel: 'Range'
        }
    ];

    return (
        <section style={{
            padding: '8rem 2rem',
            background: 'linear-gradient(180deg, #0a0a0a 0%, #050505 50%, #0a0a0a 100%)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Hexagonal Grid Background */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `
                    linear-gradient(30deg, rgba(0, 255, 157, 0.02) 12%, transparent 12.5%, transparent 87%, rgba(0, 255, 157, 0.02) 87.5%, rgba(0, 255, 157, 0.02)),
                    linear-gradient(150deg, rgba(0, 255, 157, 0.02) 12%, transparent 12.5%, transparent 87%, rgba(0, 255, 157, 0.02) 87.5%, rgba(0, 255, 157, 0.02)),
                    linear-gradient(30deg, rgba(0, 255, 157, 0.02) 12%, transparent 12.5%, transparent 87%, rgba(0, 255, 157, 0.02) 87.5%, rgba(0, 255, 157, 0.02)),
                    linear-gradient(150deg, rgba(0, 255, 157, 0.02) 12%, transparent 12.5%, transparent 87%, rgba(0, 255, 157, 0.02) 87.5%, rgba(0, 255, 157, 0.02))
                `,
                backgroundSize: '80px 140px',
                backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px',
                opacity: 0.5,
                pointerEvents: 'none'
            }}></div>

            {/* Radial Glow */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '1000px',
                height: '1000px',
                background: 'radial-gradient(circle, rgba(0, 255, 157, 0.08) 0%, transparent 70%)',
                pointerEvents: 'none',
                animation: 'pulse-glow 4s ease-in-out infinite'
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
                            Technology
                        </span>
                    </div>
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                        fontWeight: '800',
                        letterSpacing: '-0.03em',
                        background: 'linear-gradient(135deg, #ffffff 0%, #00ff9d 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        marginBottom: '1rem',
                        textShadow: '0 0 40px rgba(0, 255, 157, 0.2)'
                    }}>
                        Advanced Engineering
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
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                style={{
                                    padding: '3rem 2rem',
                                    background: 'linear-gradient(145deg, rgba(13,13,13,0.8) 0%, rgba(10,10,10,0.6) 100%)',
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    borderRadius: '20px',
                                    textAlign: 'center',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    backdropFilter: 'blur(10px)',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = 'rgba(0, 255, 157, 0.4)';
                                    e.currentTarget.style.transform = 'translateY(-12px)';
                                    e.currentTarget.style.boxShadow = '0 25px 70px rgba(0, 255, 157, 0.15)';
                                    e.currentTarget.style.background = 'linear-gradient(145deg, rgba(13,13,13,0.95) 0%, rgba(10,10,10,0.8) 100%)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.background = 'linear-gradient(145deg, rgba(13,13,13,0.8) 0%, rgba(10,10,10,0.6) 100%)';
                                }}
                            >
                                {/* Corner Accent */}
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    right: 0,
                                    width: '100px',
                                    height: '100px',
                                    background: 'radial-gradient(circle at top right, rgba(0, 255, 157, 0.1), transparent)',
                                    pointerEvents: 'none'
                                }}></div>

                                {/* Icon with Glow */}
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    margin: '0 auto 2rem',
                                    background: 'linear-gradient(135deg, rgba(0, 255, 157, 0.15) 0%, rgba(0, 212, 170, 0.1) 100%)',
                                    borderRadius: '20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '1px solid rgba(0, 255, 157, 0.2)',
                                    boxShadow: '0 0 30px rgba(0, 255, 157, 0.2)',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                                }}>
                                    <IconComponent size={36} color="#00ff9d" />
                                </div>

                                {/* Stat */}
                                <div style={{
                                    fontSize: '3rem',
                                    fontWeight: '800',
                                    background: 'linear-gradient(135deg, #00ff9d 0%, #00d4aa 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    marginBottom: '0.5rem',
                                    letterSpacing: '-0.02em'
                                }}>
                                    {feature.stat}
                                </div>
                                <div style={{
                                    fontSize: '0.85rem',
                                    color: 'rgba(0, 255, 157, 0.7)',
                                    fontWeight: '600',
                                    letterSpacing: '0.1em',
                                    textTransform: 'uppercase',
                                    marginBottom: '1.5rem'
                                }}>
                                    {feature.statLabel}
                                </div>

                                {/* Divider */}
                                <div style={{
                                    width: '60px',
                                    height: '2px',
                                    background: 'linear-gradient(90deg, transparent, #00ff9d, transparent)',
                                    margin: '0 auto 1.5rem'
                                }}></div>

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
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TechnologySection;
