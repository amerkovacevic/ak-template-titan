import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            title: "The Zenith Residence",
            category: "Residential",
            image: "/images/project_residential_1763914801789.png"
        },
        {
            title: "Apex Tower",
            category: "Commercial",
            image: "/images/project_commercial_1763914830318.png"
        },
        {
            title: "Titan Logistics Hub",
            category: "Industrial",
            // Reusing commercial image as placeholder due to quota, or could use a solid color/pattern if preferred.
            // For now, let's use the commercial one again but maybe styled differently or just duplicate.
            // Actually, let's use the hero background for variety if possible, or just duplicate.
            image: "/images/titan_hero_bg_1763914689750.png"
        }
    ];

    return (
        <section id="projects" className="section-padding" style={{ background: 'var(--primary)', color: 'white' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 'var(--spacing-lg)' }}>
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        style={{ color: 'white', marginBottom: 0 }}
                    >
                        Featured Projects
                    </motion.h2>
                    <button className="btn btn-primary">View All Work</button>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '2rem'
                }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            style={{ group: 'project-card' }}
                        >
                            <div style={{
                                position: 'relative',
                                height: '400px',
                                overflow: 'hidden',
                                marginBottom: '1.5rem'
                            }}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s ease'
                                    }}
                                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                />
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    background: 'var(--accent)',
                                    padding: '0.5rem 1.5rem',
                                    color: 'white',
                                    fontWeight: '700',
                                    textTransform: 'uppercase',
                                    fontSize: '0.9rem',
                                    letterSpacing: '1px'
                                }}>
                                    {project.category}
                                </div>
                            </div>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                            <p style={{ color: 'rgba(255,255,255,0.6)' }}>Location: New York, NY</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
