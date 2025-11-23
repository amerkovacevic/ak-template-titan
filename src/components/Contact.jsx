import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section-padding" style={{ background: 'var(--secondary)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="section-title">Get A Quote</h2>
                        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--text-muted)' }}>
                            Ready to start your next project? Contact us today for a consultation and quote. We build your vision with steel and concrete precision.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ background: 'var(--primary)', padding: '0.8rem', borderRadius: '50%', color: 'white' }}>
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <div style={{ fontWeight: '700' }}>Call Us</div>
                                    <div style={{ color: 'var(--text-muted)' }}>+1 (555) 123-4567</div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ background: 'var(--primary)', padding: '0.8rem', borderRadius: '50%', color: 'white' }}>
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <div style={{ fontWeight: '700' }}>Email Us</div>
                                    <div style={{ color: 'var(--text-muted)' }}>info@titanconstruction.com</div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ background: 'var(--primary)', padding: '0.8rem', borderRadius: '50%', color: 'white' }}>
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <div style={{ fontWeight: '700' }}>Visit Us</div>
                                    <div style={{ color: 'var(--text-muted)' }}>100 Industrial Blvd, Steel City</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        style={{ background: 'white', padding: '2rem', boxShadow: '0 10px 40px rgba(0,0,0,0.05)' }}
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                            <input type="text" placeholder="First Name" style={inputStyle} />
                            <input type="text" placeholder="Last Name" style={inputStyle} />
                        </div>
                        <input type="email" placeholder="Email Address" style={{ ...inputStyle, marginBottom: '1rem' }} />
                        <input type="text" placeholder="Project Type" style={{ ...inputStyle, marginBottom: '1rem' }} />
                        <textarea placeholder="Project Details" rows="5" style={{ ...inputStyle, marginBottom: '1.5rem', resize: 'vertical' }}></textarea>
                        <button className="btn btn-primary" style={{ width: '100%' }}>Submit Request</button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

const inputStyle = {
    width: '100%',
    padding: '1rem',
    border: '1px solid var(--border-color)',
    background: '#F8F9FA',
    fontSize: '1rem',
    outline: 'none',
    fontFamily: 'var(--font-body)'
};

export default Contact;
