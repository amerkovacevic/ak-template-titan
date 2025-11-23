import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            color: 'white'
        }}>
            {/* Background Image */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 0
            }}>
                <img
                    src="/images/titan_hero_bg_1763914689750.png"
                    alt="Construction Site"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to right, rgba(27, 38, 49, 0.9) 0%, rgba(27, 38, 49, 0.4) 100%)'
                }} />
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ maxWidth: '800px' }}
                >
                    <h2 style={{
                        color: 'var(--accent)',
                        fontSize: '1.2rem',
                        fontWeight: '700',
                        letterSpacing: '2px',
                        marginBottom: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem'
                    }}>
                        <span style={{ width: '40px', height: '2px', background: 'var(--accent)' }}></span>
                        BUILDING THE FUTURE
                    </h2>
                    <h1 style={{
                        fontSize: 'clamp(3rem, 6vw, 5rem)',
                        lineHeight: 1.1,
                        marginBottom: '2rem',
                        textShadow: '0 10px 30px rgba(0,0,0,0.3)'
                    }}>
                        SOLID FOUNDATIONS.<br />
                        SUPERIOR STRUCTURES.
                    </h1>
                    <p style={{
                        fontSize: '1.2rem',
                        maxWidth: '600px',
                        marginBottom: '3rem',
                        color: 'rgba(255,255,255,0.9)',
                        lineHeight: 1.6
                    }}>
                        We deliver industrial, commercial, and residential construction solutions with unmatched precision and durability.
                    </p>

                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <button className="btn btn-primary">
                            View Our Projects
                        </button>
                        <button className="btn" style={{ border: '2px solid white', color: 'white' }}>
                            Contact Us
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                    opacity: 0.7
                }}
            >
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Scroll</span>
                <div style={{ width: '2px', height: '40px', background: 'white' }}></div>
            </motion.div>
        </section>
    );
};

export default Hero;
