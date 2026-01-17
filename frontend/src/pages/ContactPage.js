import React from 'react';

const ContactPage = () => {
    return (
        <div style={{ padding: '4rem 2rem', minHeight: '80vh' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '2rem', textAlign: 'center' }}>Contact Us</h1>
            <form style={{ maxWidth: '600px', margin: '0 auto' }}>
                <input type="text" placeholder="Name" style={{ width: '100%', padding: '1rem', marginBottom: '1rem', background: '#1a1a1a', border: '1px solid #333', color: '#fff', borderRadius: '4px' }} />
                <input type="email" placeholder="Email" style={{ width: '100%', padding: '1rem', marginBottom: '1rem', background: '#1a1a1a', border: '1px solid #333', color: '#fff', borderRadius: '4px' }} />
                <textarea placeholder="Message" rows="5" style={{ width: '100%', padding: '1rem', marginBottom: '1rem', background: '#1a1a1a', border: '1px solid #333', color: '#fff', borderRadius: '4px' }}></textarea>
                <button type="submit" style={{ width: '100%', padding: '1rem', background: '#00ff9d', color: '#000', fontWeight: 'bold', borderRadius: '4px', fontSize: '1.1rem' }}>Send Message</button>
            </form>
        </div>
    );
};

export default ContactPage;
