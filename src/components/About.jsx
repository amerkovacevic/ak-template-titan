import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Award } from 'lucide-react';

const About = () => {
    const stats = [
        { number: "25+", label: "Years Experience" },
        { number: "500+", label: "Projects Completed" },
        { number: "100%", label: "Safety Record" }
    ];

    return (
        <section id="about" className="section-padding">
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="section-title">Who We Are</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '2rem' }}>
                            Titan Construction is a leader in the construction industry, known for our commitment to quality, safety, and innovation. Since 1998, we have been shaping skylines and building communities with integrity.
                        </p>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '3rem' }}>
                            Our team of certified professionals brings decades of combined experience to every project, ensuring that we not only meet but exceed client expectations.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {[
                                { icon: Shield, text: "Uncompromising Safety Standards" },
                                { icon: Clock, text: "On-Time Project Delivery" },
                                { icon: Award, text: "Award-Winning Craftsmanship" }
                            ].map((item, index) => (
                                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{
                                        background: 'var(--accent)',
                                        padding: '0.5rem',
                                        borderRadius: '4px',
                                        color: 'white',
                                        display: 'flex'
                                    }}>
                                        <item.icon size={20} />
                                    </div>
                                    <span style={{ fontWeight: '700', fontSize: '1.1rem' }}>{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        style={{
                            background: 'var(--primary)',
                            padding: '3rem',
                            color: 'white',
                            position: 'relative'
                        }}
                    >
                        <div style={{
                            position: 'absolute',
                            top: '-20px',
                            right: '-20px',
                            width: '100px',
                            height: '100px',
                            borderTop: '5px solid var(--accent)',
                            borderRight: '5px solid var(--accent)'
                        }} />

                        <h3 style={{ fontSize: '2rem', marginBottom: '2rem' }}>By The Numbers</h3>
                        <div style={{ display: 'grid', gap: '2rem' }}>
                            {stats.map((stat, index) => (
                                <div key={index} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                                    <div style={{ fontSize: '3rem', fontWeight: '700', color: 'var(--accent)', lineHeight: 1 }}>{stat.number}</div>
                                    <div style={{ fontSize: '1.2rem', opacity: 0.8 }}>{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
