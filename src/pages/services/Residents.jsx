import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/layout/PageLayout';
import '../../styles/pages/services/PRO.css';

const Residents = () => {
    return (
        <PageLayout
            title="UAE Residents"
            description="Dependent sponsorship, Golden Visa help, and tailored insurance/attestation support."
            headerImage="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            headerOverlayColor="rgba(0, 0, 0, 0.7)"
        >
            <div className="pro-services-page">
                <section className="intro-section">
                    <div className="section-content">
                        <div className="intro-with-image">
                            <div className="intro-text">
                                <h2>Support for UAE Residents</h2>
                                <p>Simplify sponsorships, Golden Visas, insurance, and attestations with expert help.</p>
                            </div>
                            <div className="intro-image">
                                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=500&auto=format&fit=crop" alt="UAE Residents" />
                            </div>
                        </div>
                        <div className="highlights-grid">
                            <div className="highlight-item">✅ Dependents handled</div>
                            <div className="highlight-item">✅ Golden Visa help</div>
                            <div className="highlight-item">✅ Insurance options</div>
                            <div className="highlight-item">✅ Attestations</div>
                        </div>
                    </div>
                </section>

                <section className="services-section">
                    <div className="section-content">
                        <h2>Resident Services</h2>
                        <div className="services-grid">
                            <div className="service-card">
                                <div className="service-icon">👨‍👩‍👧</div>
                                <h3>Dependent Sponsorship</h3>
                                <p>Family and domestic worker visa processing and approvals.</p>
                            </div>
                            <div className="service-card">
                                <div className="service-icon">🏅</div>
                                <h3>Golden Visa</h3>
                                <p>Eligibility checks and end‑to‑end application.</p>
                            </div>
                            <div className="service-card">
                                <div className="service-icon">🛡️</div>
                                <h3>Insurance</h3>
                                <p>Health, business, and personal coverage options.</p>
                            </div>
                            <div className="service-card">
                                <div className="service-icon">📄</div>
                                <h3>Attestation</h3>
                                <p>Attestation, legalization, and translation support.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="cta-section">
                    <div className="cta-content">
                        <h2>Get Resident Support</h2>
                        <p>We'll handle the paperwork — you focus on life and work.</p>
                        <Link to="/contact" className="cta-btn">Contact Us</Link>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default Residents;
