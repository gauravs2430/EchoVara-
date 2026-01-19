import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiCheck } from 'react-icons/fi';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setTimeout(() => {
                setSubscribed(false);
                setEmail('');
            }, 3000);
        }
    };

    return (
        <section style={{
            padding: '8rem 2rem',
            background: 'linear-gradient(180deg, #050505 0%, #0a0a0a 100%)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Top Divider */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(0, 255, 157, 0.5), transparent)'
            }}></div>

            {/* Holographic Background Pattern */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: `
                    radial-gradient(circle at 20% 50%, rgba(0, 255, 157, 0.05) 0%, transparent 50%),
                    radial-gradient(circle at 80% 50%, rgba(0, 212, 170, 0.05) 0%, transparent 50%)
                `,
                pointerEvents: 'none'
            }}></div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    textAlign: 'center',
                    position: 'relative',
                    zIndex: 1
                }}
            >
                <div style={{
                    display: 'inline-block',
                    padding: '8px 20px',
                    background: 'rgba(0, 255, 157, 0.1)',
                    border: '1px solid rgba(0, 255, 157, 0.3)',
                    borderRadius: '20px',
                    marginBottom: '2rem'
                }}>
                    <span style={{
                        color: '#00ff9d',
                        fontSize: '12px',
                        fontWeight: '600',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase'
                    }}>
                        Stay Updated
                    </span>
                </div>

                <h2 style={{
                    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                    fontWeight: '800',
                    letterSpacing: '-0.03em',
                    background: 'linear-gradient(135deg, #ffffff 0%, #00ff9d 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    marginBottom: '1rem',
                    textShadow: '0 0 30px rgba(0, 255, 157, 0.2)'
                }}>
                    Join Our Community
                </h2>

                <p style={{
                    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                    color: 'rgba(255,255,255,0.5)',
                    marginBottom: '3rem',
                    fontWeight: '300',
                    lineHeight: '1.6'
                }}>
                    Get exclusive access to new releases, special offers, and audio insights
                </p>

                <form onSubmit={handleSubmit} style={{
                    display: 'flex',
                    gap: '1rem',
                    maxWidth: '600px',
                    margin: '0 auto',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    <div style={{
                        flex: '1',
                        minWidth: '280px',
                        position: 'relative'
                    }}>
                        <FiMail
                            size={20}
                            color="rgba(0, 255, 157, 0.5)"
                            style={{
                                position: 'absolute',
                                left: '20px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                pointerEvents: 'none'
                            }}
                        />
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={subscribed}
                            style={{
                                width: '100%',
                                padding: '18px 24px 18px 52px',
                                borderRadius: '12px',
                                border: '1px solid rgba(255,255,255,0.1)',
                                background: 'rgba(13,13,13,0.6)',
                                color: '#fff',
                                fontSize: '15px',
                                outline: 'none',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                backdropFilter: 'blur(10px)'
                            }}
                            onFocus={(e) => {
                                e.target.style.borderColor = 'rgba(0, 255, 157, 0.5)';
                                e.target.style.background = 'rgba(13,13,13,0.9)';
                                e.target.style.boxShadow = '0 0 30px rgba(0, 255, 157, 0.15)';
                            }}
                            onBlur={(e) => {
                                e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                                e.target.style.background = 'rgba(13,13,13,0.6)';
                                e.target.style.boxShadow = 'none';
                            }}
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={subscribed}
                        style={{
                            padding: '18px 40px',
                            background: subscribed
                                ? 'linear-gradient(135deg, #00ff9d 0%, #00d4aa 100%)'
                                : 'linear-gradient(135deg, #00ff9d 0%, #00d4aa 100%)',
                            color: '#000',
                            borderRadius: '12px',
                            fontWeight: '700',
                            fontSize: '15px',
                            letterSpacing: '0.05em',
                            border: 'none',
                            cursor: subscribed ? 'default' : 'pointer',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            textTransform: 'uppercase',
                            boxShadow: '0 10px 30px rgba(0, 255, 157, 0.3)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            minWidth: '150px',
                            justifyContent: 'center'
                        }}
                        onMouseEnter={(e) => {
                            if (!subscribed) {
                                e.target.style.transform = 'translateY(-2px)';
                                e.target.style.boxShadow = '0 15px 40px rgba(0, 255, 157, 0.5)';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (!subscribed) {
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = '0 10px 30px rgba(0, 255, 157, 0.3)';
                            }
                        }}
                    >
                        {subscribed ? (
                            <>
                                <FiCheck size={18} />
                                Subscribed!
                            </>
                        ) : (
                            'Subscribe'
                        )}
                    </button>
                </form>

                <p style={{
                    fontSize: '0.85rem',
                    color: 'rgba(255,255,255,0.3)',
                    marginTop: '1.5rem',
                    fontWeight: '300'
                }}>
                    We respect your privacy. Unsubscribe at any time.
                </p>
            </motion.div>
        </section>
    );
};

export default Newsletter;
