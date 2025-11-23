import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = ['Services', 'Projects', 'About', 'Contact'];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                background: scrolled ? 'var(--primary)' : 'transparent',
                color: scrolled ? 'white' : 'white',
                padding: '1.5rem 0',
                transition: 'all 0.3s ease',
                boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.1)' : 'none'
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.8rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}>
                    <div style={{ width: '24px', height: '24px', background: 'var(--accent)', clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}></div>
                    TITAN
                </div>

                {/* Desktop Nav */}
                <div style={{ display: 'none', gap: '3rem', alignItems: 'center' }} className="desktop-nav">
                    {navLinks.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            style={{
                                fontSize: '0.9rem',
                                fontWeight: '700',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                position: 'relative'
                            }}
                            className="nav-link"
                        >
                            {item}
                        </a>
                    ))}
                    <button className="btn btn-primary" style={{ padding: '0.8rem 2rem', fontSize: '0.8rem' }}>
                        Get Quote
                    </button>
                </div>

                {/* Mobile Toggle */}
                <div className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ cursor: 'pointer' }}>
                    {mobileMenuOpen ? <X /> : <Menu />}
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    style={{
                        background: 'var(--primary)',
                        padding: '2rem',
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        right: 0,
                        borderTop: '1px solid rgba(255,255,255,0.1)'
                    }}
                >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
                        {navLinks.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setMobileMenuOpen(false)}
                                style={{
                                    color: 'white',
                                    fontSize: '1.2rem',
                                    fontWeight: '700',
                                    textTransform: 'uppercase'
                                }}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </motion.div>
            )}

            <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent);
          transition: width 0.3s;
        }
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
        </motion.nav>
    );
};

export default Navbar;
