import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageLayout from '../../components/layout/PageLayout';
import FreezoneOverview from './freezone/FreezoneOverview';
import DMCCPage from './freezone/details/DMCCPage';
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
					title="JAFZA (Jebel Ali Free Zone Authority)"
					description="Start Your Business in JAFZA Free Zone with NxtStar - One of UAE's most established and globally recognized free zones."
					headerImage="https://images.unsplash.com/photo-1542744094-24638eff58bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
					headerOverlayColor="rgba(0, 0, 0, 0.7)"
				>
					<div className="pro-services-page">
						<section className="intro-section">
							<div className="section-content">
								<h2>Start Your Business in JAFZA Free Zone with NxtStar</h2>
								<p>
									Jebel Ali Free Zone (JAFZA) is one of the UAE's most established and globally recognized free zones,
									strategically located next to Jebel Ali Port and Al Maktoum International Airport. Home to thousands of
									multinational companies, JAFZA is ideal for businesses involved in logistics, manufacturing, trading,
									and industrial operations.
								</p>
								<p>
									At NxtStar Management Consultancy, we streamline your JAFZA company formation—managing licensing,
									customs registration, and visa processing so you can start operating efficiently.
								</p>
							</div>
						</section>

						<section className="services-section">
							<div className="section-content">
								<h2>Why Choose JAFZA Free Zone?</h2>
								<div className="services-grid">
									<div className="service-card">
										<div className="service-icon">🌍</div>
										<h3>World-Class Infrastructure</h3>
										<p>Seamless access to Jebel Ali Port and major airports for global connectivity</p>
									</div>
									<div className="service-card">
										<div className="service-icon">🏢</div>
										<h3>100% Foreign Ownership</h3>
										<p>Full control with no local partner required</p>
									</div>
									<div className="service-card">
										<div className="service-icon">🏭</div>
										<h3>Wide Range of Facilities</h3>
										<p>Offices, warehouses, showrooms, and industrial plots available</p>
									</div>
									<div className="service-card">
										<div className="service-icon">🚛</div>
										<h3>Strategic Global Connectivity</h3>
										<p>Ideal for import-export and logistics firms</p>
									</div>
									<div className="service-card">
										<div className="service-icon">⚙️</div>
										<h3>Custom Solutions</h3>
										<p>Tailored packages for SMEs and large corporations</p>
									</div>
									<div className="service-card">
										<div className="service-icon">💰</div>
										<h3>Zero Tax Benefits</h3>
										<p>No corporate or personal income tax with full profit repatriation</p>
									</div>
								</div>
							</div>
						</section>

						<section className="services-section">
							<div className="section-content">
								<h2>Who Can Benefit from JAFZA?</h2>
								<div className="services-grid">
									<div className="service-card">
										<div className="service-icon">�</div>
										<h3>Trading & Logistics Companies</h3>
										<p>Import/export and distribution operations with port access</p>
									</div>
									<div className="service-card">
										<div className="service-icon">🏭</div>
										<h3>Manufacturing & Industrial Firms</h3>
										<p>Production facilities with customs benefits</p>
									</div>
									<div className="service-card">
										<div className="service-icon">�</div>
										<h3>E-Commerce & Distribution Centers</h3>
										<p>Warehousing and fulfillment operations</p>
									</div>
									<div className="service-card">
										<div className="service-icon">⛽</div>
										<h3>Energy, Marine & Automotive Businesses</h3>
										<p>Specialized industrial operations</p>
									</div>
									<div className="service-card">
										<div className="service-icon">🌐</div>
										<h3>Multinational Corporations</h3>
										<p>Global companies establishing Middle East presence</p>
									</div>
								</div>
							</div>
						</section>

						<section className="services-section">
							<div className="section-content">
								<h2>Setup Process</h2>
								<div className="services-grid">
									<div className="service-card">
										<div className="service-icon">📋</div>
										<h3>Choose Business Structure</h3>
										<p>Select between FZE, FZCO, or Branch office setup options</p>
									</div>
									<div className="service-card">
										<div className="service-icon">✍️</div>
										<h3>Name Reservation</h3>
										<p>Reserve your company name and submit required documents</p>
									</div>
									<div className="service-card">
										<div className="service-icon">🏢</div>
										<h3>Facility Selection</h3>
										<p>Lease your desired office, warehouse, or industrial plot</p>
									</div>
									<div className="service-card">
										<div className="service-icon">📜</div>
										<h3>License Issuance</h3>
										<p>Receive your trade license to start operations</p>
									</div>
									<div className="service-card">
										<div className="service-icon">👥</div>
										<h3>Visa Processing</h3>
										<p>Apply for residence visas for your employees</p>
									</div>
									<div className="service-card">
										<div className="service-icon">🏦</div>
										<h3>Bank Account Setup</h3>
										<p>Open your corporate bank account</p>
									</div>
								</div>

								<h2>Cost of JAFZA Business Setup</h2>
								<div className="services-grid">
									<div className="service-card">
										<div className="service-icon">💵</div>
										<h3>Starting Package</h3>
										<p>Packages start from AED 15,000 depending on facility type and visa needs</p>
									</div>
									<div className="service-card">
										<div className="service-icon">🏢</div>
										<h3>Industrial & Warehouse</h3>
										<p>Custom pricing based on space requirements and utility consumption</p>
									</div>
									<div className="service-card">
										<div className="service-icon">✅</div>
										<h3>Transparent Pricing</h3>
										<p>Clear cost structure with no hidden fees or charges</p>
									</div>
								</div>
							</div>
						</section>
						<section className="cta-section">
							<div className="cta-content">
								<h2>Get Started Today</h2>
								<p>
									JAFZA combines global connectivity with strong credibility. Our team at NxtStar helps you
									navigate the process and choose the right setup for your business goals.
								</p>
								<a href="/contact" className="cta-btn">Book Your Free Consultation Today</a>
							</div>
						</section>
					</div>
				</PageLayout>
			} />
			<Route path="/dmcc" element={<DMCCPage />} />
					title="Start Your DMCC Free Zone Business - OLD"
					description="Launch your business in Dubai Multi Commodities Centre (DMCC) - Dubai's premier free zone for trade, commodities and innovation with NxtStar's expert guidance."
					headerImage="https://images.unsplash.com/photo-1542744094-24638eff58bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
					headerOverlayColor="rgba(0, 0, 0, 0.7)"
				>
					<div className="pro-services-page">
						<section className="intro-section">
							<div className="section-content">
								<h2>Start Your Business in DMCC Free Zone with NxtStar</h2>
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
								<h2>Why Choose DMCC Free Zone?</h2>
								<div className="services-grid">
									<div className="service-card">
										<div className="service-icon">🌍</div>
										<h3>World-Class Infrastructure</h3>
										<p>Seamless access to global markets and premium JLT location</p>
									</div>
									<div className="service-card">
										<div className="service-icon">🏢</div>
										<h3>100% Foreign Ownership</h3>
										<p>Full control with no local partner required</p>
									</div>
									<div className="service-card">
										<div className="service-icon">🏭</div>
										<h3>Premium Facilities</h3>
										<p>Offices, co-working spaces, and corporate towers available</p>
									</div>
								<h3>Banking Advantage</h3>
								<p>DMCC credibility supports smoother banking. We manage introductions and KYC preparation.</p>
								<h3>Why Choose DMCC</h3>
								<ul className="icon-list">
									<li>🏆 “Global Free Zone of the Year” (multiple)</li>
									<li>📍 Prime JLT location near Dubai Marina</li>
									<li>🧩 900+ activities, 100% foreign ownership & repatriation</li>
									<li>🏢 Office spectrum: co‑working to corporate towers</li>
								</ul>
								<h3>Setup Process</h3>
								<ol className="numbered-list">
									<li>Choose activity and structure (FZ‑LLC/branch)</li>
									<li>Reserve name and submit documents</li>
									<li>Lease office and receive license approval</li>
									<li>Visas (investor/employees), Emirates ID, bank account</li>
								</ol>
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
								<h3>Why Choose DWTC</h3>
								<ul className="icon-list">
									<li>📍 Central Dubai location (Sheikh Zayed Road/metro)</li>
									<li>🏢 Prestigious business address for global firms</li>
									<li>🧩 Flexible office options from desks to suites</li>
									<li>⚡ Fast setup (3–5 days typical)</li>
									<li>🤝 Networking hub near major trade fairs/events</li>
								</ul>
								<h3>Setup & Costs</h3>
								<ol className="numbered-list">
									<li>Choose activity and structure</li>
									<li>Submit application and reserve trade name</li>
									<li>Lease office in DWTC premises</li>
									<li>Obtain license, visas, and open bank account</li>
								</ol>
								<p><strong>Costs:</strong> ~AED 15,000–18,000 depending on activity and office (flexi‑desk/visa options available).</p>
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
			<Route path="/shams" element={
				<PageLayout
					title="SHAMS (Sharjah Media City)"
					description="Affordable, fast, and flexible — SHAMS supports 150+ activities with multi‑activity licensing."
					headerImage="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0"
					headerOverlayColor="rgba(0, 0, 0, 0.7)"
				>
					<div className="pro-services-page">
						<section className="intro-section">
							<div className="section-content">
								<h2>Start Your Business in SHAMS with NXTStar</h2>
								<p>SHAMS is a fast‑growing hub for media, creatives, and startups with affordable licensing and multi‑activity options.</p>
								<div className="highlights-grid">
									<div className="highlight-item">✅ Affordable setup</div>
									<div className="highlight-item">✅ Up to 6 activities/license</div>
									<div className="highlight-item">✅ No office required</div>
									<div className="highlight-item">✅ 24–48h licensing</div>
								</div>
							</div>
						</section>
						<section className="services-section">
							<div className="section-content">
								<h2>Who It Suits & Steps</h2>
								<div className="services-grid">
									<div className="service-card"><div className="service-icon">🎬</div><h3>Media & Creatives</h3><p>Agencies, production, content creators.</p></div>
									<div className="service-card"><div className="service-icon">🧭</div><h3>Consultancies</h3><p>Professional and advisory services.</p></div>
									<div className="service-card"><div className="service-icon">🛒</div><h3>E‑commerce</h3><p>Online sellers and platforms.</p></div>
									<div className="service-card"><div className="service-icon">🚀</div><h3>Startups/Freelancers</h3><p>Low cost, quick start.</p></div>
								</div>
								<h3>Setup Process</h3>
								<ol className="numbered-list">
									<li>Choose activities and structure (FZE/FZC)</li>
									<li>Reserve trade name and submit KYC</li>
									<li>Get license (often within 1–2 days)</li>
									<li>Apply for visas and open bank account</li>
								</ol>
							</div>
						</section>
						<section className="cta-section">
							<div className="cta-content">
								<h2>Book Your Free Consultation</h2>
								<p>We’ll simplify licensing, visas, and banking for SHAMS.</p>
								<a href="/contact" className="cta-btn">Get Started</a>
							</div>
						</section>
					</div>
				</PageLayout>
			} />
			<Route path="/diac" element={
				<PageLayout
					title="Dubai Internet City (DIC)"
					description="The region’s premier technology hub for ICT, AI, SaaS, and digital ventures."
					headerImage="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0"
					headerOverlayColor="rgba(0, 0, 0, 0.7)"
				>
					<div className="pro-services-page">
						<section className="intro-section">
							<div className="section-content">
								<h2>Start Your Business in Dubai Internet City</h2>
								<p>DIC is home to global tech leaders and thriving startups, offering world‑class infrastructure and talent access.</p>
								<div className="highlights-grid">
									<div className="highlight-item">✅ Premier tech ecosystem</div>
									<div className="highlight-item">✅ Strategic location</div>
									<div className="highlight-item">✅ Flexible offices</div>
									<div className="highlight-item">✅ 100% ownership</div>
								</div>
							</div>
						</section>
						<section className="services-section">
							<div className="section-content">
								<h2>Who It Suits & Costs</h2>
								<div className="services-grid">
									<div className="service-card"><div className="service-icon">🖥️</div><h3>Software & SaaS</h3><p>Developers and product teams.</p></div>
									<div className="service-card"><div className="service-icon">🔐</div><h3>Cloud & Cyber</h3><p>Cloud, AI, cybersecurity firms.</p></div>
									<div className="service-card"><div className="service-icon">🧭</div><h3>IT Services</h3><p>Consultancies and integrators.</p></div>
									<div className="service-card"><div className="service-icon">🛒</div><h3>E‑commerce/Digital</h3><p>Platforms and tech‑enabled brands.</p></div>
								</div>
								<h3>Setup Process</h3>
								<ol className="numbered-list">
									<li>Select license category (Commercial/Freelancer)</li>
									<li>Trade name + documents submission</li>
									<li>Lease office in DIC</li>
									<li>License and establishment card</li>
									<li>Visas and bank account</li>
								</ol>
								<p>Typical setup: AED 15,000–25,000 depending on license and space.</p>
							</div>
						</section>
						<section className="cta-section">
							<div className="cta-content">
								<h2>Book Your Free Consultation</h2>
								<p>Launch your tech venture in DIC with expert support.</p>
								<a href="/contact" className="cta-btn">Talk to Us</a>
							</div>
						</section>
					</div>
				</PageLayout>
			} />
			<Route path="/dmca" element={
				<PageLayout
					title="Dubai Media City (DMC)"
					description="The region’s leading hub for media, communications, and creative industries."
					headerImage="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0"
					headerOverlayColor="rgba(0, 0, 0, 0.7)"
				>
					<div className="pro-services-page">
						<section className="intro-section">
							<div className="section-content">
								<h2>Start Your Business in Dubai Media City</h2>
								<p>DMC hosts global media leaders and regional agencies with studios, offices, and co‑working options.</p>
								<div className="highlights-grid">
									<div className="highlight-item">✅ Media & creative hub</div>
									<div className="highlight-item">✅ Central location</div>
									<div className="highlight-item">✅ Networking access</div>
									<div className="highlight-item">✅ 100% ownership</div>
								</div>
							</div>
						</section>
						<section className="services-section">
							<div className="section-content">
								<h2>Who It Suits & Setup</h2>
								<div className="services-grid">
									<div className="service-card"><div className="service-icon">📺</div><h3>Broadcast/Production</h3><p>Studios, post‑production, crews.</p></div>
									<div className="service-card"><div className="service-icon">📣</div><h3>Advertising/PR</h3><p>Agencies and communications firms.</p></div>
									<div className="service-card"><div className="service-icon">🎥</div><h3>Content Creators</h3><p>Digital media and influencers.</p></div>
									<div className="service-card"><div className="service-icon">🎫</div><h3>Events/Festivals</h3><p>Event management and promotions.</p></div>
								</div>
								<h3>Process</h3>
								<ol className="numbered-list">
									<li>Choose license and activities</li>
									<li>Reserve name + submit application</li>
									<li>Lease studio/office space</li>
									<li>License issuance and visas</li>
									<li>Open corporate bank account</li>
								</ol>
							</div>
						</section>
						<section className="cta-section">
							<div className="cta-content">
								<h2>Book Your Free Consultation</h2>
								<p>We’ll manage licensing, permits, visas, and banking.</p>
								<a href="/contact" className="cta-btn">Get Started</a>
							</div>
						</section>
					</div>
				</PageLayout>
			} />
			<Route path="/dkp" element={
				<PageLayout
					title="Dubai Knowledge Park (DKP) & DIAC"
					description="Dubai’s hubs for education, training, and academic excellence with purpose‑built facilities."
					headerImage="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0"
					headerOverlayColor="rgba(0, 0, 0, 0.7)"
				>
					<div className="pro-services-page">
						<section className="intro-section">
							<div className="section-content">
								<h2>Start in DKP & DIAC with NXTStar</h2>
								<p>Specialized academic and training zones with campuses, classrooms, and co‑working spaces for education providers.</p>
								<div className="highlights-grid">
									<div className="highlight-item">✅ Academic ecosystems</div>
									<div className="highlight-item">✅ Purpose‑built facilities</div>
									<div className="highlight-item">✅ Global community</div>
									<div className="highlight-item">✅ 100% ownership</div>
								</div>
							</div>
						</section>
						<section className="services-section">
							<div className="section-content">
								<h2>Who It Suits & Steps</h2>
								<div className="services-grid">
									<div className="service-card"><div className="service-icon">🎓</div><h3>Universities</h3><p>Branch campuses and affiliates.</p></div>
									<div className="service-card"><div className="service-icon">🏫</div><h3>Training Institutes</h3><p>Professional and vocational training.</p></div>
									<div className="service-card"><div className="service-icon">🧭</div><h3>Ed Consultancies</h3><p>Recruitment and advisory.</p></div>
									<div className="service-card"><div className="service-icon">💻</div><h3>EdTech/Online</h3><p>Platforms and providers.</p></div>
								</div>
								<h3>Setup Process</h3>
								<ol className="numbered-list">
									<li>Select category (Education/Consultancy/Services)</li>
									<li>Name reservation + docs</li>
									<li>Academic approvals if required</li>
									<li>Lease campus/office/flexi‑desk</li>
									<li>Trade license, visas, bank account</li>
								</ol>
							</div>
						</section>
						<section className="cta-section">
							<div className="cta-content">
								<h2>Book Your Free Consultation</h2>
								<p>We’ll handle approvals, licensing, visas, and banking.</p>
								<a href="/contact" className="cta-btn">Speak to Experts</a>
							</div>
						</section>
					</div>
				</PageLayout>
			} />
			<Route path="/difc" element={
				<PageLayout
					title="DIFC (Dubai International Financial Centre)"
					description="The region’s top financial hub with an independent common law framework and DFSA regulation."
					headerImage="https://images.unsplash.com/photo-1549921296-3a6b0b36c6b5?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0"
					headerOverlayColor="rgba(0, 0, 0, 0.7)"
				>
					<div className="pro-services-page">
						<section className="intro-section">
							<div className="section-content">
								<h2>Start Your Business in DIFC with NXTStar</h2>
								<p>Unmatched legal protection, global reputation, and access to financial institutions across MEASA.</p>
								<div className="highlights-grid">
									<div className="highlight-item">✅ Common law jurisdiction</div>
									<div className="highlight-item">✅ DFSA regulation</div>
									<div className="highlight-item">✅ 0% corporate tax</div>
									<div className="highlight-item">✅ Premium offices</div>
								</div>
							</div>
						</section>
						<section className="services-section">
							<div className="section-content">
								<h2>Who It Suits & Steps</h2>
								<div className="services-grid">
									<div className="service-card"><div className="service-icon">🏦</div><h3>Financial/Investment</h3><p>Banks, asset managers, advisors.</p></div>
									<div className="service-card"><div className="service-icon">💳</div><h3>Fintech</h3><p>Payments, regtech, insurtech.</p></div>
									<div className="service-card"><div className="service-icon">⚖️</div><h3>Professional Services</h3><p>Legal, audit, and consulting.</p></div>
									<div className="service-card"><div className="service-icon">📄</div><h3>Holding/SPVs</h3><p>Structuring and family offices.</p></div>
								</div>
								<h3>Setup Process</h3>
								<ol className="numbered-list">
									<li>Define structure and license (regulated/non‑regulated)</li>
									<li>Business plan + documents to registrar</li>
									<li>Regulatory/non‑regulatory approval</li>
									<li>Lease DIFC premises</li>
									<li>Certificate, visas, bank account</li>
								</ol>
							</div>
						</section>
						<section className="cta-section">
							<div className="cta-content">
								<h2>Book Your Free Consultation</h2>
								<p>We’ll navigate approvals, compliance, and banking.</p>
								<a href="/contact" className="cta-btn">Start in DIFC</a>
							</div>
						</section>
					</div>
				</PageLayout>
			} />
			<Route path="/masdar" element={
				<PageLayout
					title="Masdar City Free Zone"
					description="Abu Dhabi’s hub for sustainability, innovation, and clean technology."
					headerImage="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0"
					headerOverlayColor="rgba(0, 0, 0, 0.7)"
				>
					<div className="pro-services-page">
						<section className="intro-section">
							<div className="section-content">
								<h2>Start Your Sustainable Business in Masdar City</h2>
								<p>Eco‑infrastructure, competitive licensing, and green economy access for clean tech and R&D firms.</p>
								<div className="highlights-grid">
									<div className="highlight-item">✅ Sustainability focus</div>
									<div className="highlight-item">✅ Prime Abu Dhabi location</div>
									<div className="highlight-item">✅ Eco offices and labs</div>
									<div className="highlight-item">✅ 100% ownership</div>
								</div>
							</div>
						</section>
						<section className="services-section">
							<div className="section-content">
								<h2>Who It Suits & Steps</h2>
								<div className="services-grid">
									<div className="service-card"><div className="service-icon">🔋</div><h3>Clean Tech</h3><p>Renewables and energy tech.</p></div>
									<div className="service-card"><div className="service-icon">🌱</div><h3>Environmental</h3><p>Environmental consultancies.</p></div>
									<div className="service-card"><div className="service-icon">🧪</div><h3>R&D</h3><p>Research labs and product design.</p></div>
									<div className="service-card"><div className="service-icon">🛠️</div><h3>Tech/Engineering</h3><p>Innovation and hardware firms.</p></div>
								</div>
								<h3>Setup & Costs</h3>
								<ol className="numbered-list">
									<li>Activity & license selection</li>
									<li>Reserve name + submit docs</li>
									<li>Masdar approval + lease</li>
									<li>License, visas, bank account</li>
								</ol>
								<p>Licenses typically AED 7,000–15,000 depending on activity and space.</p>
							</div>
						</section>
						<section className="cta-section">
							<div className="cta-content">
								<h2>Book Your Free Consultation</h2>
								<p>We’ll align your setup with Masdar’s sustainability ecosystem.</p>
								<a href="/contact" className="cta-btn">Start in Masdar</a>
							</div>
						</section>
					</div>
				</PageLayout>
			} />
			<Route path="/srtip" element={
				<PageLayout
					title="SRTIP (Sharjah Research, Technology & Innovation Park)"
					description="Sharjah’s innovation hub for R&D, technology, and manufacturing."
					headerImage="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0"
					headerOverlayColor="rgba(0, 0, 0, 0.7)"
				>
					<div className="pro-services-page">
						<section className="intro-section">
							<div className="section-content">
								<h2>Start Your Innovation Business in SRTIP</h2>
								<p>Built for R&D and advanced technology, with academic links and modern labs/workshops.</p>
								<div className="highlights-grid">
									<div className="highlight-item">✅ Innovation ecosystem</div>
									<div className="highlight-item">✅ Academic collaboration</div>
									<div className="highlight-item">✅ Modern infrastructure</div>
									<div className="highlight-item">✅ 100% ownership</div>
								</div>
							</div>
						</section>
						<section className="services-section">
							<div className="section-content">
								<h2>Who It Suits & Steps</h2>
								<div className="services-grid">
									<div className="service-card"><div className="service-icon">🤖</div><h3>Tech & Engineering</h3><p>Robotics, AI, 3D printing.</p></div>
									<div className="service-card"><div className="service-icon">🧪</div><h3>R&D/Product Design</h3><p>Prototyping and labs.</p></div>
									<div className="service-card"><div className="service-icon">🌱</div><h3>Green Energy</h3><p>Sustainable solutions firms.</p></div>
									<div className="service-card"><div className="service-icon">🎓</div><h3>Innovation Consulting</h3><p>Education and advisory.</p></div>
								</div>
								<h3>Setup & Costs</h3>
								<ol className="numbered-list">
									<li>Define activity and structure</li>
									<li>Application & initial approval</li>
									<li>Lease workspace or lab</li>
									<li>License issuance, visas, banking</li>
								</ol>
								<p>Licenses start around AED 6,000–8,000.</p>
							</div>
						</section>
						<section className="cta-section">
							<div className="cta-content">
								<h2>Book Your Free Consultation</h2>
								<p>We’ll fast‑track your SRTIP setup and operations.</p>
								<a href="/contact" className="cta-btn">Start in SRTIP</a>
							</div>
						</section>
					</div>
				</PageLayout>
			} />
			<Route path="/dafza" element={
				<PageLayout
					title="Dubai Airport Free Zone (DAFZA)"
					description="Prestigious free zone next to DXB Airport — ideal for trading, logistics, aviation, and tech."
					headerImage="https://images.unsplash.com/photo-1560717845-968823efbee1?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0"
					headerOverlayColor="rgba(0, 0, 0, 0.7)"
				>
					<div className="pro-services-page">
						<section className="intro-section">
							<div className="section-content">
								<h2>Start Your Business in DAFZA</h2>
								<p>World‑class logistics, global connectivity, and modern infrastructure directly adjacent to Dubai International Airport.</p>
								<div className="highlights-grid">
									<div className="highlight-item">✅ Prime airport location</div>
									<div className="highlight-item">✅ Global connectivity</div>
									<div className="highlight-item">✅ Warehouses & offices</div>
									<div className="highlight-item">✅ Fast setup</div>
								</div>
							</div>
						</section>
						<section className="services-section">
							<div className="section-content">
								<h2>Who It Suits & Steps</h2>
								<div className="services-grid">
									<div className="service-card"><div className="service-icon">🚚</div><h3>Trading/Logistics</h3><p>Import/export, distribution centers.</p></div>
									<div className="service-card"><div className="service-icon">✈️</div><h3>Aviation/Aerospace</h3><p>Adjacent to DXB airport.</p></div>
									<div className="service-card"><div className="service-icon">🛒</div><h3>E‑commerce</h3><p>Fulfillment and cross‑border.</p></div>
									<div className="service-card"><div className="service-icon">💻</div><h3>Tech/Electronics</h3><p>High‑value inventory handling.</p></div>
								</div>
								<h3>Setup & Costs</h3>
								<ol className="numbered-list">
									<li>Choose activity and structure</li>
									<li>Reserve name + docs submission</li>
									<li>Lease DAFZA space</li>
									<li>License issuance</li>
									<li>Visas and banking</li>
								</ol>
								<p>Licenses typically AED 15,000–18,000 depending on activity and space.</p>
							</div>
						</section>
						<section className="cta-section">
							<div className="cta-content">
								<h2>Book Your Free Consultation</h2>
								<p>We’ll manage end‑to‑end setup, customs, visas, and banking.</p>
								<a href="/contact" className="cta-btn">Start in DAFZA</a>
							</div>
						</section>
					</div>
				</PageLayout>
			} />
			<Route path="/ajman-nuventures" element={
				<PageLayout
					title="Ajman Nuventures Centre Free Zone"
					description="New, dynamic hub with cost‑effective licensing and flexible packages for innovators and SMEs."
					headerImage="https://images.unsplash.com/photo-1516542076529-1ea3854896e1?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0"
					headerOverlayColor="rgba(0, 0, 0, 0.7)"
				>
					<div className="pro-services-page">
						<section className="intro-section">
							<div className="section-content">
								<h2>Start Your Business in Ajman Nuventures with NXTStar</h2>
								<p>Fast, affordable, and flexible — designed to support innovation, freelancers, and SMEs.</p>
								<div className="highlights-grid">
									<div className="highlight-item">✅ Affordable licensing</div>
									<div className="highlight-item">✅ 100% ownership</div>
									<div className="highlight-item">✅ Multi‑activity options</div>
									<div className="highlight-item">✅ 1–2 day setup</div>
								</div>
							</div>
						</section>
						<section className="services-section">
							<div className="section-content">
								<h2>Who It Suits & Costs</h2>
								<div className="services-grid">
									<div className="service-card"><div className="service-icon">🧭</div><h3>Consultants/Freelancers</h3><p>Low‑cost permits and visas.</p></div>
									<div className="service-card"><div className="service-icon">🛒</div><h3>E‑commerce/Trading</h3><p>Simple, quick licensing.</p></div>
									<div className="service-card"><div className="service-icon">💡</div><h3>Tech/Creators</h3><p>Digital and content businesses.</p></div>
									<div className="service-card"><div className="service-icon">🏢</div><h3>SMEs</h3><p>Visa and non‑visa packages.</p></div>
								</div>
								<p>Packages from AED 4,888 with visa and non‑visa options; virtual office available.</p>
							</div>
						</section>
						<section className="cta-section">
							<div className="cta-content">
								<h2>Book Your Free Consultation</h2>
								<p>We’ll register your company fast, transparently, and compliantly.</p>
								<a href="/contact" className="cta-btn">Start in Nuventures</a>
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