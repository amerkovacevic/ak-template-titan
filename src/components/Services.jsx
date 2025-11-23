import React from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, Factory, ArrowRight } from 'lucide-react';

const Services = () => {
    const services = [
        {
            title: "Residential",
            description: "Custom homes and multi-unit developments built with precision and care.",
            icon: Home
        },
        {
            title: "Commercial",
            description: "Office buildings, retail spaces, and hospitality projects that drive business.",
            icon: Building2
        },
        {
            title: "Industrial",
            description: "Warehouses, factories, and distribution centers engineered for efficiency.",
            icon: Factory
        }
    ];

    return (
        <section id="services" className="section-padding" style={{ background: 'var(--secondary)' }}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Our Expertise
                </motion.h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            style={{
                                background: 'white',
                                padding: '3rem 2rem',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                position: 'relative',
                                overflow: 'hidden',
                                borderBottom: '3px solid transparent',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.borderBottom = '3px solid var(--accent)'}
                            onMouseLeave={(e) => e.currentTarget.style.borderBottom = '3px solid transparent'}
                        >
                            <div style={{
                                marginBottom: '2rem',
                                color: 'var(--accent)'
                            }}>
                                <service.icon size={48} strokeWidth={1.5} />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{service.title}</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '2rem' }}>{service.description}</p>

                            <a href="#" style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                fontWeight: '700',
                                color: 'var(--primary)',
                                textTransform: 'uppercase',
                                fontSize: '0.9rem',
                                letterSpacing: '1px'
                            }}>
                                Learn More <ArrowRight size={16} />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
