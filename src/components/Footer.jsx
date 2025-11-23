import React from 'react';

const Footer = () => {
    return (
        <footer style={{ background: '#111', color: 'white', padding: '4rem 0 2rem' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
                    <div>
                        <div style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            marginBottom: '1.5rem'
                        }}>
                            <div style={{ width: '20px', height: '20px', background: 'var(--accent)', clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}></div>
                            TITAN
                        </div>
                        <p style={{ color: '#888', lineHeight: 1.6 }}>
                            Building the future with strength, integrity, and innovation. Your trusted partner in construction excellence.
                        </p>
                    </div>

                    <div>
                        <h4 style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem', color: '#888' }}>
                            <li><a href="#home" style={{ transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent)'} onMouseLeave={(e) => e.target.style.color = '#888'}>Home</a></li>
                            <li><a href="#about" style={{ transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent)'} onMouseLeave={(e) => e.target.style.color = '#888'}>About Us</a></li>
                            <li><a href="#services" style={{ transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent)'} onMouseLeave={(e) => e.target.style.color = '#888'}>Services</a></li>
                            <li><a href="#projects" style={{ transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent)'} onMouseLeave={(e) => e.target.style.color = '#888'}>Projects</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>Services</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem', color: '#888' }}>
                            <li>Residential Construction</li>
                            <li>Commercial Development</li>
                            <li>Industrial Engineering</li>
                            <li>Project Management</li>
                        </ul>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid #333', paddingTop: '2rem', textAlign: 'center', color: '#666' }}>
                    <p>&copy; {new Date().getFullYear()} Titan Construction. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
