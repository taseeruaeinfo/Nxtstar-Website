import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import '../styles/pages/PrivacyPolicy.css';

const PrivacyPolicy = () => {
    return (
        <PageLayout
            title="Privacy Policy"
            description="Learn how NxtStar Management Consultancy collects, uses, and protects your personal information."
            headerImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
            headerOverlayColor="rgba(0, 0, 0, 0.6)"
        >
            <div className="privacy-policy-page">
                <div className="privacy-content">
                    <p className="last-updated">Last Updated: October 31, 2025</p>
                    
                    <div className="policy-intro">
                        <p>
                            This Privacy Notice for <strong>NxtStar Management Consultancy</strong> ("NxtStar", "we", "our", or "us") explains how we collect, use, disclose, and safeguard your personal data when you visit our website <a href="https://www.nxtstar.ae">www.nxtstar.ae</a>, engage with us via forms or communications, or otherwise use our services (collectively, the "Services").
                        </p>
                        <p>
                            By using our website or submitting your information, you agree to the terms outlined in this Privacy Policy. If you do not agree, please discontinue use of our Services.
                        </p>
                    </div>

                    <div className="key-points-section">
                        <h2>Summary of Key Points</h2>
                        <ul className="key-points-list">
                            <li><strong>Personal information we collect:</strong> We collect personal and contact information such as your name, email, and phone number when you fill out forms or contact us.</li>
                            <li><strong>Sensitive data:</strong> We do not collect or process sensitive personal data (e.g., biometric, medical, or financial details).</li>
                            <li><strong>How we use your data:</strong> To communicate with you, provide consultation, improve our website and services, and comply with UAE laws.</li>
                            <li><strong>Data sharing:</strong> We do not sell your data. We only share it with trusted service providers or government authorities where required.</li>
                            <li><strong>Data protection:</strong> We use appropriate security and encryption measures to protect your information.</li>
                            <li><strong>Your rights:</strong> You can access, update, or request deletion of your data at any time by contacting us at <a href="mailto:nehajakhar@nxtstar.ae">nehajakhar@nxtstar.ae</a>.</li>
                        </ul>
                    </div>

                    <div className="table-of-contents">
                        <h2>Table of Contents</h2>
                        <ol>
                            <li><a href="#section-1">What Information Do We Collect?</a></li>
                            <li><a href="#section-2">How Do We Process Your Information?</a></li>
                            <li><a href="#section-3">What Legal Bases Do We Rely On?</a></li>
                            <li><a href="#section-4">When and With Whom Do We Share Your Personal Information?</a></li>
                            <li><a href="#section-5">Do We Use Cookies and Other Tracking Technologies?</a></li>
                            <li><a href="#section-6">How Long Do We Keep Your Information?</a></li>
                            <li><a href="#section-7">How Do We Keep Your Information Safe?</a></li>
                            <li><a href="#section-8">Do We Collect Information from Minors?</a></li>
                            <li><a href="#section-9">What Are Your Privacy Rights?</a></li>
                            <li><a href="#section-10">Controls for Do-Not-Track Features</a></li>
                            <li><a href="#section-11">UAE and International Data Protection Compliance</a></li>
                            <li><a href="#section-12">Do We Make Updates to This Notice?</a></li>
                            <li><a href="#section-13">How Can You Contact Us About This Notice?</a></li>
                            <li><a href="#section-14">How Can You Review, Update, or Delete the Data We Collect From You?</a></li>
                        </ol>
                    </div>

                    <section id="section-1" className="policy-section">
                        <h2>1. What Information Do We Collect?</h2>
                        
                        <h3>Personal Information You Provide</h3>
                        <p>We collect personal information you voluntarily provide when you:</p>
                        <ul>
                            <li>Submit a contact form or business inquiry</li>
                            <li>Subscribe to newsletters or updates</li>
                            <li>Communicate with us directly via email or WhatsApp</li>
                        </ul>
                        
                        <p>This may include:</p>
                        <ul>
                            <li>Full name</li>
                            <li>Email address</li>
                            <li>Phone number</li>
                            <li>Company name (if applicable)</li>
                            <li>Country of residence or nationality</li>
                            <li>Any message or details you provide related to your business goals</li>
                        </ul>

                        <h3>Automatically Collected Information</h3>
                        <p>When you use our website, we may automatically collect:</p>
                        <ul>
                            <li>IP address</li>
                            <li>Browser type and version</li>
                            <li>Pages visited, time spent, and referring URL</li>
                            <li>Device type and operating system</li>
                        </ul>

                        <h3>Cookies</h3>
                        <p>We use cookies to enhance user experience, analyze web traffic, and tailor content. You can choose to disable cookies in your browser settings.</p>
                    </section>

                    <section id="section-2" className="policy-section">
                        <h2>2. How Do We Process Your Information?</h2>
                        <p>We process your personal data to:</p>
                        <ul>
                            <li>Respond to your business inquiries</li>
                            <li>Provide consultation and follow-up communication</li>
                            <li>Send updates or promotional materials (only if you opt in)</li>
                            <li>Improve our website's functionality and content</li>
                            <li>Ensure compliance with UAE laws and regulations</li>
                        </ul>
                        <p>We do not use your personal data for automated decision-making or profiling.</p>
                    </section>

                    <section id="section-3" className="policy-section">
                        <h2>3. What Legal Bases Do We Rely On?</h2>
                        <p>We process your personal information under the following lawful bases:</p>
                        <ul>
                            <li><strong>Consent:</strong> When you voluntarily submit information (e.g., filling out a form).</li>
                            <li><strong>Contractual necessity:</strong> When we provide services or consultations you request.</li>
                            <li><strong>Legal obligation:</strong> To comply with UAE government or regulatory requirements.</li>
                            <li><strong>Legitimate interest:</strong> To operate and improve our business processes and communication.</li>
                        </ul>
                        <p>You may withdraw your consent anytime by contacting us.</p>
                    </section>

                    <section id="section-4" className="policy-section">
                        <h2>4. When and With Whom Do We Share Your Personal Information?</h2>
                        <p>We may share your data only with:</p>
                        <ul>
                            <li>Authorized employees and consultants involved in handling your inquiry or service request</li>
                            <li>Third-party service providers (e.g., hosting, CRM, analytics tools) who are bound by confidentiality obligations</li>
                            <li>Government entities or legal authorities, when required to comply with UAE laws</li>
                        </ul>
                        <p><strong>We do not sell, rent, or trade personal data to any third party.</strong></p>
                    </section>

                    <section id="section-5" className="policy-section">
                        <h2>5. Do We Use Cookies and Other Tracking Technologies?</h2>
                        <p>Yes. We use cookies, pixels, and similar technologies to:</p>
                        <ul>
                            <li>Understand how visitors interact with our site</li>
                            <li>Improve page loading, analytics, and user experience</li>
                        </ul>
                        <p>You can manage or disable cookies in your browser settings. Some features of the website may not function properly if cookies are disabled.</p>
                    </section>

                    <section id="section-6" className="policy-section">
                        <h2>6. How Long Do We Keep Your Information?</h2>
                        <p>We retain your information only as long as necessary to:</p>
                        <ul>
                            <li>Fulfill the purposes for which it was collected</li>
                            <li>Comply with legal and regulatory obligations</li>
                        </ul>
                        <p>Once data is no longer needed, we securely delete or anonymize it.</p>
                    </section>

                    <section id="section-7" className="policy-section">
                        <h2>7. How Do We Keep Your Information Safe?</h2>
                        <p>We apply administrative, technical, and physical safeguards to protect your data from unauthorized access, alteration, or disclosure. However, no system is completely secure - transmission over the Internet carries inherent risks that we cannot eliminate entirely.</p>
                    </section>

                    <section id="section-8" className="policy-section">
                        <h2>8. Do We Collect Information From Minors?</h2>
                        <p>Our services are intended for adults (18+). We do not knowingly collect data from children under 18. If we learn that such data has been collected, we will delete it immediately.</p>
                    </section>

                    <section id="section-9" className="policy-section">
                        <h2>9. What Are Your Privacy Rights?</h2>
                        <p>You may have the right to:</p>
                        <ul>
                            <li>Request access to your personal data</li>
                            <li>Request correction or deletion of your data</li>
                            <li>Withdraw consent for communications</li>
                        </ul>
                        <p>To exercise these rights, email <a href="mailto:nehajakhar@nxtstar.ae">nehajakhar@nxtstar.ae</a>.</p>
                        <p>We will process your request in accordance with <strong>UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data (PDPL)</strong>.</p>
                    </section>

                    <section id="section-10" className="policy-section">
                        <h2>10. Controls for Do-Not-Track Features</h2>
                        <p>Our website does not currently respond to browser "Do Not Track" signals. We will update this section if a standard is adopted.</p>
                    </section>

                    <section id="section-11" className="policy-section">
                        <h2>11. UAE and International Data Protection Compliance</h2>
                        <p>NxtStar complies with applicable data protection laws, including:</p>
                        <ul>
                            <li>UAE Federal Decree-Law No. 45 of 2021 (PDPL)</li>
                            <li>Dubai International Financial Centre (DIFC) Data Protection Law</li>
                            <li>General Data Protection Regulation (GDPR) for EU/EEA users</li>
                        </ul>
                        <p>If you are based outside the UAE, your data may be transferred to and processed in the UAE under secure and lawful conditions.</p>
                    </section>

                    <section id="section-12" className="policy-section">
                        <h2>12. Do We Make Updates to This Notice?</h2>
                        <p>Yes. We may update this Privacy Policy periodically to reflect legal, operational, or service changes. The "Last Updated" date above will indicate the latest revision.</p>
                    </section>

                    <section id="section-13" className="policy-section">
                        <h2>13. How Can You Contact Us About This Notice?</h2>
                        <p>If you have any questions or concerns regarding this policy, please contact us at:</p>
                        <div className="contact-box">
                            <p><strong>NxtStar Management Consultancy</strong></p>
                            <p>📍 Dubai, United Arab Emirates</p>
                            <p>🌐 <a href="https://www.nxtstar.ae">www.nxtstar.ae</a></p>
                            <p>📧 <a href="mailto:nehajakhar@nxtstar.ae">nehajakhar@nxtstar.ae</a></p>
                        </div>
                    </section>

                    <section id="section-14" className="policy-section">
                        <h2>14. How Can You Review, Update, or Delete the Data We Collect From You?</h2>
                        <p>You may request to review, update, or delete your personal information by contacting us at <a href="mailto:nehajakhar@nxtstar.ae">nehajakhar@nxtstar.ae</a>. We will act on your request in line with applicable UAE and international data protection laws.</p>
                    </section>
                </div>
            </div>
        </PageLayout>
    );
};

export default PrivacyPolicy;
