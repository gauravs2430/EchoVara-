import React from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
    const footerLinks = {
        Product: [
            { label: 'Features', path: '/products' },
            { label: 'Pricing', path: '/products' },
            { label: 'Reviews', path: '/products' }
        ],
        Company: [
            { label: 'About', path: '/about' },
            { label: 'Contact', path: '/contact' },
            { label: 'Careers', path: '/about' }
        ],
        Support: [
            { label: 'Help Center', path: '/contact' },
            { label: 'Warranty', path: '/about' },
            { label: 'Shipping', path: '/about' }
        ]
    };

    const socialLinks = [
        { icon: FiTwitter, url: '#', label: 'Twitter' },
        { icon: FiInstagram, url: '#', label: 'Instagram' },
        { icon: FiLinkedin, url: '#', label: 'LinkedIn' },
        { icon: FiGithub, url: '#', label: 'GitHub' }
    ];

    return (
        <footer style={{
            background: 'linear-gradient(180deg, #0a0a0a 0%, #050505 100%)',
            padding: '5rem 2rem 2rem',
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

            {/* Grid Background */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `
                    linear-gradient(rgba(0, 255, 157, 0.02) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0, 255, 157, 0.02) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px',
                opacity: 0.3,
                pointerEvents: 'none'
            }}></div>

            <div style={{
                maxWidth: '1400px',
                margin: '0 auto',
                position: 'relative',
                zIndex: 1
            }}>
                {/* Main Footer Content */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '3rem',
                    marginBottom: '4rem'
                }}>
                    {/* Brand Section */}
                    <div style={{ gridColumn: 'span 1' }}>
                        <h3 style={{
                            fontSize: '2rem',
                            fontWeight: '800',
                            background: 'linear-gradient(135deg, #00ff9d 0%, #00d4aa 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            marginBottom: '1rem',
                            letterSpacing: '-0.02em'
                        }}>
                            Echovara
                        </h3>
                        <p style={{
                            color: 'rgba(255,255,255,0.5)',
                            fontSize: '0.95rem',
                            lineHeight: '1.6',
                            marginBottom: '1.5rem',
                            fontWeight: '300'
                        }}>
                            Premium audio engineering for the discerning listener.
                        </p>
                        {/* Social Links */}
                        <div style={{
                            display: 'flex',
                            gap: '1rem'
                        }}>
                            {socialLinks.map((social, index) => {
                                const IconComponent = social.icon;
                                return (
                                    <a
                                        key={index}
                                        href={social.url}
                                        aria-label={social.label}
                                        style={{
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '10px',
                                            background: 'rgba(255,255,255,0.05)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'rgba(255,255,255,0.5)',
                                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                            textDecoration: 'none'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = 'rgba(0, 255, 157, 0.15)';
                                            e.currentTarget.style.borderColor = 'rgba(0, 255, 157, 0.3)';
                                            e.currentTarget.style.color = '#00ff9d';
                                            e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 255, 157, 0.2)';
                                            e.currentTarget.style.transform = 'translateY(-2px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                                            e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
                                            e.currentTarget.style.boxShadow = 'none';
                                            e.currentTarget.style.transform = 'translateY(0)';
                                        }}
                                    >
                                        <IconComponent size={18} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Link Sections */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 style={{
                                fontSize: '1rem',
                                fontWeight: '700',
                                color: '#fff',
                                marginBottom: '1.5rem',
                                letterSpacing: '0.05em',
                                textTransform: 'uppercase'
                            }}>
                                {category}
                            </h4>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                {links.map((link, index) => (
                                    <li key={index} style={{ marginBottom: '0.75rem' }}>
                                        <Link
                                            to={link.path}
                                            style={{
                                                color: 'rgba(255,255,255,0.5)',
                                                textDecoration: 'none',
                                                fontSize: '0.95rem',
                                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                                display: 'inline-block',
                                                fontWeight: '300'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.target.style.color = '#00ff9d';
                                                e.target.style.transform = 'translateX(4px)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.color = 'rgba(255,255,255,0.5)';
                                                e.target.style.transform = 'translateX(0)';
                                            }}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div style={{
                    paddingTop: '2rem',
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem'
                }}>
                    <p style={{
                        color: 'rgba(255,255,255,0.3)',
                        fontSize: '0.9rem',
                        fontWeight: '300'
                    }}>
                        © 2026 Echovara. All rights reserved.
                    </p>
                    <div style={{
                        display: 'flex',
                        gap: '2rem'
                    }}>
                        <Link
                            to="/about"
                            style={{
                                color: 'rgba(255,255,255,0.3)',
                                textDecoration: 'none',
                                fontSize: '0.9rem',
                                transition: 'color 0.3s',
                                fontWeight: '300'
                            }}
                            onMouseEnter={(e) => e.target.style.color = '#00ff9d'}
                            onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.3)'}
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            to="/about"
                            style={{
                                color: 'rgba(255,255,255,0.3)',
                                textDecoration: 'none',
                                fontSize: '0.9rem',
                                transition: 'color 0.3s',
                                fontWeight: '300'
                            }}
                            onMouseEnter={(e) => e.target.style.color = '#00ff9d'}
                            onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.3)'}
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
