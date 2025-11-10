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
						<div className="freezone-detail-page">
							<h2>Why Choose IFZA?</h2>
							<div className="highlights-grid">
								<div className="highlight-item">✅ Dubai Silicon Oasis address</div>
								<div className="highlight-item">✅ Fast 2–3 day licensing</div>
								<div className="highlight-item">✅ Multi‑activity licenses</div>
								<div className="highlight-item">✅ Visa & banking support</div>
							</div>
							<h3>Best For</h3>
							<ul className="icon-list">
								<li>💡 Tech startups and SaaS</li>
								<li>🧭 Consultants and professional services</li>
								<li>🛒 E‑commerce and online brands</li>
								<li>🌍 Global SMEs needing Dubai credibility</li>
							</ul>
							<h3>Quick Setup Steps</h3>
							<ol className="numbered-list">
								<li>Select activities and structure (FZE/FZCO/branch)</li>
								<li>Reserve trade name and submit KYC</li>
								<li>License issuance and digital docs</li>
								<li>Visa quota and investor/employee visas</li>
								<li>Corporate bank account opening</li>
							</ol>
							<h3>Package Guide</h3>
							<ul className="icon-list">
								<li>📦 Starter: License + registration, no office (virtual)</li>
								<li>🚀 Growth: License + visa quota + Flexi‑desk</li>
								<li>🏢 Scale: Dedicated office + multiple visas</li>
							</ul>
							<h3>IFZA FAQs</h3>
							<ul className="icon-list">
								<li><strong>Do I need an office?</strong> Not initially; virtual/Flexi options are available.</li>
								<li><strong>Banking?</strong> Dubai address enhances acceptance; we assist end‑to‑end.</li>
							</ul>
							<div className="cta-row">
								<a href="/contact" className="contact-btn">Book a Free Consultation</a>
								<a href="/services" className="secondary-btn">See Services</a>
							</div>
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
						<div className="freezone-detail-page">
							<h2>Meydan Free Zone – Prestige, Power, and Possibility</h2>
							<div className="highlights-grid">
								<div className="highlight-item">✅ Royal patronage credibility</div>
								<div className="highlight-item">✅ Prime city location</div>
								<div className="highlight-item">✅ No office requirement</div>
								<div className="highlight-item">✅ Speedy incorporation</div>
							</div>
							<h3>Best For</h3>
							<ul className="icon-list">
								<li>🧭 Consultancy and professional services</li>
								<li>🛒 E‑commerce and DTC brands</li>
								<li>📦 Trading companies</li>
								<li>✨ Luxury/lifestyle brands</li>
							</ul>
							<h3>What You Get</h3>
							<ul className="icon-list">
								<li>📜 Modern licensing framework</li>
								<li>🛂 Flexible visa packages</li>
								<li>🏦 Strong banking acceptance</li>
								<li>📍 Prestigious business address</li>
							</ul>
							<div className="cta-row">
								<a href="/contact" className="contact-btn">Start Your Meydan Setup</a>
								<a href="/blogs" className="secondary-btn">Read Guides</a>
							</div>
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
                    <div className="freezone-detail-page">
							<h2>JAFZA Overview</h2>
							<p>One of the world’s largest free zones — ideal for trade, manufacturing, and logistics with port adjacency.</p>
							<div className="highlights-grid">
								<div className="highlight-item">✅ Jebel Ali Port adjacency</div>
								<div className="highlight-item">✅ Industrial facilities</div>
								<div className="highlight-item">✅ Global logistics</div>
							</div>
							<h3>Industries</h3>
							<ul className="icon-list">
								<li>🚢 Trading and distribution</li>
								<li>🏭 Manufacturing and assembly</li>
								<li>📦 Warehousing and 3PL</li>
							</ul>
							<h3>Setup Snapshot</h3>
							<ol className="numbered-list">
								<li>Activity & facility selection</li>
								<li>Name reservation and KYC</li>
								<li>License issuance</li>
								<li>Leases and utilities</li>
							</ol>
							<div className="cta-row">
								<a href="/contact" className="contact-btn">Get JAFZA Guidance</a>
								<a href="/services" className="secondary-btn">See PRO Services</a>
							</div>
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
                    <div className="freezone-detail-page">
							<h2>DMCC Highlights</h2>
							<p>World’s leading hub for commodities and trade with strong credibility.</p>
							<div className="highlights-grid">
								<div className="highlight-item">✅ Premium JLT address</div>
								<div className="highlight-item">✅ Global recognition</div>
								<div className="highlight-item">✅ Trading ecosystem</div>
							</div>
							<h3>Who It Suits</h3>
							<ul className="icon-list">
								<li>🥇 Precious metals and commodities</li>
								<li>🧭 Professional services</li>
								<li>📈 Trading and brokerage</li>
							</ul>
							<h3>Banking Advantage</h3>
							<p>DMCC’s credibility supports smoother banking relationships. We coordinate introductions and KYC.</p>
							<div className="cta-row">
								<a href="/contact" className="contact-btn">Discuss DMCC Options</a>
								<a href="/blogs" className="secondary-btn">Learn About Freezones</a>
							</div>
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
                    <div className="freezone-detail-page">
							<h2>DWTC Overview</h2>
							<p>Central Dubai location, excellent for events, technology, media, and consultancy firms.</p>
							<div className="highlights-grid">
								<div className="highlight-item">✅ Prime business district</div>
								<div className="highlight-item">✅ Expo & networking</div>
								<div className="highlight-item">✅ Flexible licensing</div>
							</div>
							<h3>Great For</h3>
							<ul className="icon-list">
								<li>🎤 Events and conferences</li>
								<li>🖥️ Technology and media</li>
								<li>🧭 Consultancy</li>
							</ul>
							<div className="cta-row">
								<a href="/contact" className="contact-btn">Explore DWTC Setup</a>
								<a href="/services" className="secondary-btn">Talk to PRO Team</a>
							</div>
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
						<div className="freezone-detail-page">
							<h2>Why SPC?</h2>
							<div className="highlights-grid">
								<div className="highlight-item">✅ Up to 5 activities per license</div>
								<div className="highlight-item">✅ 48‑hour licensing</div>
								<div className="highlight-item">✅ No office required</div>
								<div className="highlight-item">✅ Visa packages</div>
							</div>
							<h3>Ideal For</h3>
							<ul className="icon-list">
								<li>📚 Publishing and media</li>
								<li>🧭 Consultancy</li>
								<li>🛒 Trading and e‑commerce</li>
								<li>🎓 Education and training</li>
							</ul>
							<h3>How It Works</h3>
							<ol className="numbered-list">
								<li>Pick activities and structure</li>
								<li>Name reservation and KYC</li>
								<li>License issuance (48 hours typical)</li>
								<li>Visa and banking support</li>
							</ol>
							<div className="cta-row">
								<a href="/contact" className="contact-btn">Start in SPC</a>
								<a href="/blogs" className="secondary-btn">Freezone Guides</a>
							</div>
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
						<div className="freezone-detail-page">
							<h2>AFZ Benefits</h2>
							<div className="highlights-grid">
								<div className="highlight-item">✅ Budget‑friendly</div>
								<div className="highlight-item">✅ Fast setup</div>
								<div className="highlight-item">✅ Multi‑activity</div>
								<div className="highlight-item">✅ Visa options</div>
							</div>
							<h3>Who Chooses AFZ</h3>
							<ul className="icon-list">
								<li>🛒 Trading and e‑commerce</li>
								<li>🧭 Consultancy & services</li>
								<li>🏭 Light industry & warehousing</li>
								<li>🚀 Startups and SMEs</li>
							</ul>
							<div className="cta-row">
								<a href="/contact" className="contact-btn">Setup in AFZ</a>
								<a href="/services" className="secondary-btn">Talk to an Expert</a>
							</div>
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
						<div className="freezone-detail-page">
							<h2>Why RAKEZ?</h2>
							<div className="highlights-grid">
								<div className="highlight-item">✅ Affordable packages</div>
								<div className="highlight-item">✅ Industrial facilities</div>
								<div className="highlight-item">✅ Scalable visas</div>
								<div className="highlight-item">✅ Quick setup</div>
							</div>
							<h3>Great For</h3>
							<ul className="icon-list">
								<li>🏭 Manufacturing and logistics</li>
								<li>🛒 Trading and e‑commerce</li>
								<li>🎨 Creative and media</li>
								<li>🚀 Startups to global firms</li>
							</ul>
							<div className="cta-row">
								<a href="/contact" className="contact-btn">Start with RAKEZ</a>
								<a href="/blogs" className="secondary-btn">See Case Studies</a>
							</div>
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
						<div className="freezone-detail-page">
							<h2>Find Your Best‑Fit Free Zone</h2>
							<p>We compare 40+ free zones on activities, costs, visa quotas, and office needs.</p>
							<ul className="icon-list">
								<li>🏅 <strong>DMCC:</strong> Commodities/trade hub with premium credibility</li>
								<li>⚖️ <strong>DIFC:</strong> Common‑law courts, finance and fintech ecosystem</li>
								<li>🎬 <strong>Dubai Media City:</strong> Media, marketing, production</li>
								<li>💻 <strong>Dubai Internet City:</strong> IT, software, tech innovators</li>
							</ul>
							<h3>How We Help</h3>
							<ol className="numbered-list">
								<li>Map your activities and team plan</li>
								<li>Shortlist 2–3 best‑fit free zones</li>
								<li>Provide cost and visa comparisons</li>
								<li>Fast‑track setup, visas, and banking</li>
							</ol>
							<div className="cta-row">
								<a href="/contact" className="contact-btn">Get a Free Comparison</a>
								<a href="/services" className="secondary-btn">See Full Services</a>
							</div>
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