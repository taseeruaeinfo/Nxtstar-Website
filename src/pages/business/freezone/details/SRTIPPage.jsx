import React from 'react';
import PageLayout from '../../../../components/layout/PageLayout';
import { FaFlask, FaUniversity, FaCogs, FaMapMarkerAlt, FaPercent, FaRobot, FaLeaf, FaProjectDiagram } from 'react-icons/fa';
import '../../../../styles/pages/business/freezone/details/SRTIPPage.css';

const SRTIPPage = () => {
    return (
        <PageLayout
            title="Sharjah Research, Technology & Innovation Park (SRTIP)"
            description="Start your innovation business in SRTIP — the UAE's forward-looking free zone for R&D, technology, and advanced manufacturing."
            headerImage="https://images.unsplash.com/photo-1558343697-1f6f89119c77?q=80&w=1200&auto=format&fit=crop"
            headerOverlayColor="rgba(0,0,0,0.55)"
        >
            <div className="freezone-detail-page">
                {/* Overview */}
                <section className="section-content">
                    <h2>Start Your Innovation Business in SRTIP with NxtStar</h2>
                    <p>Sharjah Research, Technology & Innovation Park (SRTIP) is a forward-looking free zone designed to foster R&D, technology, and innovation‑driven enterprises. Backed by Sharjah’s academic institutions, it connects research with real‑world business opportunities.</p>
                    <p>NxtStar Management Consultancy makes it easy to establish your company in SRTIP — handling licensing, visas, and corporate banking efficiently.</p>
                </section>

                {/* Why Choose SRTIP */}
                <section className="section-content">
                    <h2>Why Choose SRTIP?</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <span className="feature-icon"><FaFlask /></span>
                            <h3>Innovation Ecosystem</h3>
                            <p>Built for R&D, technology, prototyping, and manufacturing firms.</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon"><FaUniversity /></span>
                            <h3>Academic Collaboration</h3>
                            <p>Access to Sharjah's universities, labs, and research institutions.</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon"><FaCogs /></span>
                            <h3>Modern Infrastructure</h3>
                            <p>Labs, workshops, co‑working hubs, and testing facilities.</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon"><FaMapMarkerAlt /></span>
                            <h3>Strategic Location</h3>
                            <p>Adjacent to University City with access to major highways.</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon"><FaPercent /></span>
                            <h3>100% Ownership</h3>
                            <p>Full profit repatriation and business flexibility.</p>
                        </div>
                    </div>
                </section>

                {/* Who Can Benefit */}
                <section className="section-content">
                    <h2>Who Can Benefit from SRTIP?</h2>
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <h3>Tech & Engineering Startups</h3>
                            <p>Innovators building products and platforms for global markets.</p>
                        </div>
                        <div className="benefit-card">
                            <h3>R&D & Product Design</h3>
                            <p>Companies focused on research, prototyping, and IP creation.</p>
                        </div>
                        <div className="benefit-card">
                            <h3>Robotics, AI & 3D Printing</h3>
                            <p>Advanced tech ventures in automation, AI, and additive manufacturing.</p>
                        </div>
                        <div className="benefit-card">
                            <h3>Green Energy & Sustainability</h3>
                            <p>Clean tech companies developing sustainable solutions.</p>
                        </div>
                        <div className="benefit-card">
                            <h3>Educational & Innovation Consultancies</h3>
                            <p>Advisors connecting academia and industry with applied outcomes.</p>
                        </div>
                    </div>
                </section>

                {/* Setup Process */}
                <section className="section-content">
                    <h2>Setup Process</h2>
                    <div className="setup-grid">
                        <div className="setup-card">
                            <h3>Step 1: Define Activity & Structure</h3>
                            <p>Select business activities and choose your legal structure.</p>
                        </div>
                        <div className="setup-card">
                            <h3>Step 2: Application & Documents</h3>
                            <p>Submit your application and KYC documents to SRTIP Authority.</p>
                        </div>
                        <div className="setup-card">
                            <h3>Step 3: Initial Approval</h3>
                            <p>Obtain initial free zone approval to proceed.</p>
                        </div>
                        <div className="setup-card">
                            <h3>Step 4: Lease Workspace</h3>
                            <p>Choose a lab, workshop, or co‑working space and sign the lease.</p>
                        </div>
                        <div className="setup-card">
                            <h3>Step 5: Trade License</h3>
                            <p>Receive your SRTIP trade license after final approvals.</p>
                        </div>
                        <div className="setup-card">
                            <h3>Step 6: Visas & Banking</h3>
                            <p>Apply for residence visas and open your corporate bank account.</p>
                        </div>
                    </div>
                </section>

                {/* Cost */}
                <section className="section-content">
                    <h2>Cost of SRTIP Business Setup</h2>
                    <div className="cost-info">
                        <p>Licenses start from around AED 6,000–8,000, making SRTIP one of the most cost‑effective innovation free zones in the UAE.</p>
                    </div>
                </section>

                {/* CTA */}
                <section className="cta-section">
                    <div className="cta-content">
                        <h2>Get Started Today</h2>
                        <p>SRTIP offers an inspiring environment for innovators and researchers. Let NxtStar help you build your venture at the intersection of technology and opportunity.</p>
                        <a href="/contact" className="cta-btn">Book Your Free Consultation</a>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default SRTIPPage;
