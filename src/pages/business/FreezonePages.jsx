import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageLayout from '../../components/layout/PageLayout';
import FreezoneOverview from './freezone/FreezoneOverview';
import '../../styles/pages/business/FreezonePages.css';

const FreezonePages = () => {
    return (
        <Routes>
            <Route path="/" element={<FreezoneOverview />} />
            {/* Add routes for specific free zones */}
				<Route path="/ifza" element={
					<PageLayout
						title="IFZA (International Free Zone Authority)"
						description="Affordable, flexible Dubai free zone in Dubai Silicon Oasis — ideal for startups, consultants, and e‑commerce."
						headerImage="https://images.unsplash.com/photo-1489465036402-503c88639ad1?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						headerOverlayColor="rgba(0, 0, 0, 0.7)"
					>
						<div className="pro-services-page">
							<section className="intro-section">
								<div className="section-content">
									<h2>Why Choose IFZA?</h2>
									<p>Affordable, flexible, and credible — IFZA in Dubai Silicon Oasis is ideal for startups, consultants, and e‑commerce brands.</p>
									<div className="highlights-grid">
										<div className="highlight-item">✅ DSO address</div>
										<div className="highlight-item">✅ 2–3 day licensing</div>
										<div className="highlight-item">✅ Multi‑activity</div>
										<div className="highlight-item">✅ Visa & banking support</div>
									</div>
								</div>
							</section>
							<section className="services-section">
								<div className="section-content">
									<h2>Best For & Packages</h2>
									<div className="services-grid">
										<div className="service-card"><div className="service-icon">💡</div><h3>Best For</h3><p>Tech startups, SaaS, consultants, e‑commerce, and global SMEs.</p></div>
										<div className="service-card"><div className="service-icon">📦</div><h3>Starter</h3><p>License + registration, virtual office.</p></div>
										<div className="service-card"><div className="service-icon">🚀</div><h3>Growth</h3><p>License + visa quota + Flexi‑desk.</p></div>
										<div className="service-card"><div className="service-icon">🏢</div><h3>Scale</h3><p>Dedicated office + multiple visas.</p></div>
									</div>
									<h3>Quick Setup Steps</h3>
									<ol className="numbered-list">
										<li>Select activities and structure (FZE/FZCO/branch)</li>
										<li>Reserve trade name and submit KYC</li>
										<li>License issuance and digital docs</li>
										<li>Visa quota and visas</li>
										<li>Open corporate bank account</li>
									</ol>
								</div>
							</section>
							<section className="cta-section">
								<div className="cta-content">
									<h2>Book a Free Consultation</h2>
									<p>We advise on activities, manage documents, and assist with visas and banking.</p>
									<a href="/contact" className="cta-btn">Get Started</a>
								</div>
							</section>
						</div>
					</PageLayout>
				} />
				<Route path="/meydan" element={
					<PageLayout
						title="Meydan Free Zone"
						description="Prestigious Dubai free zone with strong banking acceptance and fast, modern licensing."
						headerImage="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						headerOverlayColor="rgba(0, 0, 0, 0.7)"
					>
						<div className="pro-services-page">
							<section className="intro-section">
								<div className="section-content">
									<h2>Meydan Free Zone – Prestige, Power, and Possibility</h2>
									<p>Position your company with Dubai prestige, modern licensing, and strong banking acceptance.</p>
									<div className="highlights-grid">
										<div className="highlight-item">✅ Royal patronage credibility</div>
										<div className="highlight-item">✅ Prime city location</div>
										<div className="highlight-item">✅ No office needed</div>
										<div className="highlight-item">✅ Fast incorporation</div>
									</div>
								</div>
							</section>
							<section className="services-section">
								<div className="section-content">
									<h2>Ideal Use Cases & Advantages</h2>
									<div className="services-grid">
										<div className="service-card"><div className="service-icon">🧭</div><h3>Consultancy</h3><p>Professional and advisory services.</p></div>
										<div className="service-card"><div className="service-icon">🛒</div><h3>E‑commerce</h3><p>DTC brands and online stores.</p></div>
										<div className="service-card"><div className="service-icon">📦</div><h3>Trading</h3><p>Local and cross‑border trade.</p></div>
										<div className="service-card"><div className="service-icon">✨</div><h3>Luxury</h3><p>Brands needing prestige.</p></div>
										<div className="service-card"><div className="service-icon">📜</div><h3>Modern Licensing</h3><p>Flexible and fast processes.</p></div>
										<div className="service-card"><div className="service-icon">🛂</div><h3>Visa Packages</h3><p>Scalable for teams.</p></div>
										<div className="service-card"><div className="service-icon">🏦</div><h3>Banking</h3><p>Strong acceptance with top banks.</p></div>
										<div className="service-card"><div className="service-icon">📍</div><h3>Address</h3><p>Prestigious Dubai presence.</p></div>
									</div>
								</div>
							</section>
							<section className="cta-section">
								<div className="cta-content">
									<h2>Start Your Meydan Setup</h2>
									<p>We’ll plan activities, manage documents, and handle visas and banking.</p>
									<a href="/contact" className="cta-btn">Talk to an Expert</a>
								</div>
							</section>
						</div>
					</PageLayout>
				} />
            <Route path="/jafza" element={
                <PageLayout
                    title="JAFZA Free Zone"
                    description="Set up your business in Jebel Ali Free Zone, one of Dubai's most established free zones."
                    headerImage="https://images.unsplash.com/photo-1542744094-24638eff58bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                    headerOverlayColor="rgba(0, 0, 0, 0.7)"
                >
                    <div className="pro-services-page">
						<section className="intro-section">
							<div className="section-content">
								<h2>JAFZA Overview</h2>
								<p>One of the world’s largest free zones — ideal for trade, manufacturing, and logistics with port adjacency.</p>
								<div className="highlights-grid">
									<div className="highlight-item">✅ Jebel Ali Port adjacency</div>
									<div className="highlight-item">✅ Industrial facilities</div>
									<div className="highlight-item">✅ Global logistics</div>
								</div>
							</div>
						</section>
						<section className="services-section">
							<div className="section-content">
								<h2>Industries & Setup</h2>
								<div className="services-grid">
									<div className="service-card"><div className="service-icon">🚢</div><h3>Trading</h3><p>Distribution and cross‑border trade.</p></div>
									<div className="service-card"><div className="service-icon">🏭</div><h3>Manufacturing</h3><p>Assembly and production facilities.</p></div>
									<div className="service-card"><div className="service-icon">📦</div><h3>Warehousing</h3><p>3PL and storage solutions.</p></div>
								</div>
								<h3>Setup Snapshot</h3>
								<ol className="numbered-list">
									<li>Activity & facility selection</li>
									<li>Name reservation and KYC</li>
									<li>License issuance</li>
									<li>Leases and utilities</li>
								</ol>
							</div>
						</section>
						<section className="cta-section">
							<div className="cta-content">
								<h2>Get JAFZA Guidance</h2>
								<p>Plan facilities, licensing, and customs with an expert team.</p>
								<a href="/contact" className="cta-btn">Speak to Us</a>
							</div>
						</section>
                    </div>
                </PageLayout>
            } />
            <Route path="/dmcc" element={
                <PageLayout
                    title="DMCC Free Zone"
                    description="Set up your business in Dubai Multi Commodities Centre, perfect for trading companies."
                    headerImage="https://images.unsplash.com/photo-1542744094-24638eff58bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                    headerOverlayColor="rgba(0, 0, 0, 0.7)"
                >
                    <div className="pro-services-page">
						<section className="intro-section">
							<div className="section-content">
								<h2>DMCC Highlights</h2>
								<p>The world’s leading commodities and trade hub with premium credibility and banking acceptance.</p>
								<div className="highlights-grid">
									<div className="highlight-item">✅ Premium JLT address</div>
									<div className="highlight-item">✅ Global recognition</div>
									<div className="highlight-item">✅ Trading ecosystem</div>
								</div>
							</div>
						</section>
						<section className="services-section">
							<div className="section-content">
								<h2>Who It Suits & Banking</h2>
								<div className="services-grid">
									<div className="service-card"><div className="service-icon">🥇</div><h3>Metals & Commodities</h3><p>Gold, diamonds, energy, agri.</p></div>
									<div className="service-card"><div className="service-icon">🧭</div><h3>Professional Services</h3><p>Advisory, legal, accounting, more.</p></div>
									<div className="service-card"><div className="service-icon">📈</div><h3>Trading & Brokerage</h3><p>Global and regional trading.</p></div>
								</div>
								<h3>Banking Advantage</h3>
								<p>DMCC credibility supports smoother banking. We manage introductions and KYC preparation.</p>
							</div>
						</section>
						<section className="cta-section">
							<div className="cta-content">
								<h2>Discuss DMCC Options</h2>
								<p>We’ll map activities, structure, and timelines for you.</p>
								<a href="/contact" className="cta-btn">Book a Call</a>
							</div>
						</section>
                    </div>
                </PageLayout>
            } />
            <Route path="/dwtc" element={
                <PageLayout
                    title="DWTC Free Zone"
                    description="Set up your business in Dubai World Trade Centre Free Zone, strategically located in the heart of Dubai."
                    headerImage="https://images.unsplash.com/photo-1542744094-24638eff58bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                    headerOverlayColor="rgba(0, 0, 0, 0.7)"
                >
                    <div className="pro-services-page">
						<section className="intro-section">
							<div className="section-content">
								<h2>DWTC Overview</h2>
								<p>Prime central Dubai location — excellent for events, technology, media, and consultancy firms.</p>
								<div className="highlights-grid">
									<div className="highlight-item">✅ Prime business district</div>
									<div className="highlight-item">✅ Expo & networking</div>
									<div className="highlight-item">✅ Flexible licensing</div>
								</div>
							</div>
						</section>
						<section className="services-section">
							<div className="section-content">
								<h2>Great For</h2>
								<div className="services-grid">
									<div className="service-card"><div className="service-icon">🎤</div><h3>Events</h3><p>Access to exhibitions and conferences.</p></div>
									<div className="service-card"><div className="service-icon">🖥️</div><h3>Technology</h3><p>Tech and media firms in central Dubai.</p></div>
									<div className="service-card"><div className="service-icon">🧭</div><h3>Consultancy</h3><p>Professional services with city presence.</p></div>
								</div>
							</div>
						</section>
						<section className="cta-section">
							<div className="cta-content">
								<h2>Explore DWTC Setup</h2>
								<p>We’ll help you navigate licensing, visas, and PRO services.</p>
								<a href="/contact" className="cta-btn">Contact Us</a>
							</div>
						</section>
                    </div>
                </PageLayout>
            } />
				<Route path="/spc" element={
					<PageLayout
						title="Sharjah Publishing City (SPC)"
						description="Flexible, cost‑effective free zone with fast setup and multi‑activity licensing."
						headerImage="https://images.unsplash.com/photo-1516741535767-1438e7d0ff85?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						headerOverlayColor="rgba(0, 0, 0, 0.7)"
					>
						<div className="pro-services-page">
							<section className="intro-section">
								<div className="section-content">
									<h2>Why SPC?</h2>
									<p>Flexible, cost‑effective, and fast — SPC enables up to five activities per license with licensing in as little as 48 hours.</p>
									<div className="highlights-grid">
										<div className="highlight-item">✅ 5 activities/license</div>
										<div className="highlight-item">✅ 48‑hour licensing</div>
										<div className="highlight-item">✅ No office required</div>
										<div className="highlight-item">✅ Visa packages</div>
									</div>
								</div>
							</section>
							<section className="services-section">
								<div className="section-content">
									<h2>Ideal For & Steps</h2>
									<div className="services-grid">
										<div className="service-card"><div className="service-icon">📚</div><h3>Publishing/Media</h3><p>Publishers, content, and media firms.</p></div>
										<div className="service-card"><div className="service-icon">🧭</div><h3>Consultancy</h3><p>Professional advisory services.</p></div>
										<div className="service-card"><div className="service-icon">🛒</div><h3>Trading/E‑com</h3><p>Import/export and online sellers.</p></div>
										<div className="service-card"><div className="service-icon">🎓</div><h3>Training</h3><p>Education and coaching.</p></div>
									</div>
									<h3>How It Works</h3>
									<ol className="numbered-list">
										<li>Pick activities and structure</li>
										<li>Name reservation and KYC</li>
										<li>License issuance</li>
										<li>Visas and banking</li>
									</ol>
								</div>
							</section>
							<section className="cta-section">
								<div className="cta-content">
									<h2>Start in SPC</h2>
									<p>We’ll handle licensing, visas, and bank account support.</p>
									<a href="/contact" className="cta-btn">Get Started</a>
								</div>
							</section>
						</div>
					</PageLayout>
				} />
				<Route path="/afz" element={
					<PageLayout
						title="Ajman Free Zone (AFZ)"
						description="Popular, affordable, and flexible free zone for startups, SMEs, trading, and services."
						headerImage="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						headerOverlayColor="rgba(0, 0, 0, 0.7)"
					>
						<div className="pro-services-page">
							<section className="intro-section">
								<div className="section-content">
									<h2>AFZ Benefits</h2>
									<p>Budget‑friendly and fast setup with multi‑activity licensing and visa options.</p>
									<div className="highlights-grid">
										<div className="highlight-item">✅ Budget‑friendly</div>
										<div className="highlight-item">✅ Fast setup</div>
										<div className="highlight-item">✅ Multi‑activity</div>
										<div className="highlight-item">✅ Visa options</div>
									</div>
								</div>
							</section>
							<section className="services-section">
								<div className="section-content">
									<h2>Who Chooses AFZ</h2>
									<div className="services-grid">
										<div className="service-card"><div className="service-icon">🛒</div><h3>Trading & E‑com</h3><p>Import/export and online sellers.</p></div>
										<div className="service-card"><div className="service-icon">🧭</div><h3>Consultancy</h3><p>Professional and service firms.</p></div>
										<div className="service-card"><div className="service-icon">🏭</div><h3>Light Industry</h3><p>Warehousing and light manufacturing.</p></div>
										<div className="service-card"><div className="service-icon">🚀</div><h3>Startups/SMEs</h3><p>Cost‑effective market entry.</p></div>
									</div>
								</div>
							</section>
							<section className="cta-section">
								<div className="cta-content">
									<h2>Setup in AFZ</h2>
									<p>Get a cost‑effective, compliant setup with end‑to‑end support.</p>
									<a href="/contact" className="cta-btn">Talk to an Expert</a>
								</div>
							</section>
						</div>
					</PageLayout>
				} />
				<Route path="/rakez" element={
					<PageLayout
						title="RAKEZ (Ras Al Khaimah Economic Zone)"
						description="Versatile and entrepreneur‑friendly free zone with industrial strength and affordability."
						headerImage="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						headerOverlayColor="rgba(0, 0, 0, 0.7)"
					>
						<div className="pro-services-page">
							<section className="intro-section">
								<div className="section-content">
									<h2>Why RAKEZ?</h2>
									<p>Versatile and entrepreneur‑friendly with industrial strength, affordability, and scalability.</p>
									<div className="highlights-grid">
										<div className="highlight-item">✅ Affordable packages</div>
										<div className="highlight-item">✅ Industrial facilities</div>
										<div className="highlight-item">✅ Scalable visas</div>
										<div className="highlight-item">✅ Quick setup</div>
									</div>
								</div>
							</section>
							<section className="services-section">
								<div className="section-content">
									<h2>Great For</h2>
									<div className="services-grid">
										<div className="service-card"><div className="service-icon">🏭</div><h3>Manufacturing</h3><p>Industrial facilities and logistics.</p></div>
										<div className="service-card"><div className="service-icon">🛒</div><h3>Trading & E‑com</h3><p>Regional and global trade.</p></div>
										<div className="service-card"><div className="service-icon">🎨</div><h3>Creative/Media</h3><p>Specialized licenses and support.</p></div>
										<div className="service-card"><div className="service-icon">🚀</div><h3>Startups → Enterprises</h3><p>Scalable visa solutions for teams.</p></div>
									</div>
								</div>
							</section>
							<section className="cta-section">
								<div className="cta-content">
									<h2>Start with RAKEZ</h2>
									<p>We’ll shortlist facilities, manage licensing, and set up banking.</p>
									<a href="/contact" className="cta-btn">Get a Plan</a>
								</div>
							</section>
						</div>
					</PageLayout>
				} />
				<Route path="/others" element={
					<PageLayout
						title="Other UAE Free Zones"
						description="DMCC, DIFC, Dubai Media City, Dubai Internet City and many more — we guide you to the right fit."
						headerImage="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						headerOverlayColor="rgba(0, 0, 0, 0.7)"
					>
						<div className="pro-services-page">
							<section className="intro-section">
								<div className="section-content">
									<h2>Find Your Best‑Fit Free Zone</h2>
									<p>We compare 40+ free zones on activities, costs, visa quotas, and office needs.</p>
								</div>
							</section>
							<section className="services-section">
								<div className="section-content">
									<h2>Popular Options & Process</h2>
									<div className="services-grid">
										<div className="service-card"><div className="service-icon">🏅</div><h3>DMCC</h3><p>Commodities/trade hub with premium credibility.</p></div>
										<div className="service-card"><div className="service-icon">⚖️</div><h3>DIFC</h3><p>Common‑law courts, finance/fintech ecosystem.</p></div>
										<div className="service-card"><div className="service-icon">🎬</div><h3>Dubai Media City</h3><p>Media, marketing, production.</p></div>
										<div className="service-card"><div className="service-icon">💻</div><h3>Dubai Internet City</h3><p>IT, software, tech innovators.</p></div>
									</div>
									<h3>How We Help</h3>
									<ol className="numbered-list">
										<li>Map activities and headcount plan</li>
										<li>Shortlist 2–3 best‑fit free zones</li>
										<li>Provide cost and visa comparisons</li>
										<li>Fast‑track setup, visas, and banking</li>
									</ol>
								</div>
							</section>
							<section className="cta-section">
								<div className="cta-content">
									<h2>Get a Free Comparison</h2>
									<p>Make an informed choice with a tailored shortlist and cost breakdown.</p>
									<a href="/contact" className="cta-btn">Compare Now</a>
								</div>
							</section>
						</div>
					</PageLayout>
				} />
            <Route path="*" element={
                <PageLayout
                    title="Free Zone Not Found"
                    description="The free zone you are looking for does not exist."
                    headerImage="https://images.unsplash.com/photo-1542744094-24638eff58bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                    headerOverlayColor="rgba(0, 0, 0, 0.7)"
                >
                    <div className="freezone-not-found">
                        <h2>Free Zone Not Found</h2>
                        <p>The free zone you are looking for does not exist or has been moved.</p>
                        <a href="/business/freezone" className="back-link">Back to Free Zones</a>
                    </div>
                </PageLayout>
            } />
        </Routes>
    );
};

export default FreezonePages;