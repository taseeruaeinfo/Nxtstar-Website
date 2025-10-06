import React, { useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import Button from '../components/ui/Button';
import { FaGift, FaUsers, FaChartLine, FaHandHoldingUsd, FaShareAlt, FaCheckCircle, FaMedal, FaTrophy } from 'react-icons/fa';
import '../styles/pages/ReferAndEarnPage.css';

const ReferAndEarnPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        friendName: '',
        friendEmail: '',
        friendPhone: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert('Thank you! Your referral has been submitted. We will contact you soon.');
        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: '',
            friendName: '',
            friendEmail: '',
            friendPhone: ''
        });
    };

    const benefits = [
        {
            icon: <FaGift />,
            title: 'Attractive Rewards',
            description: 'Earn up to AED 1,000 for each successful referral'
        },
        {
            icon: <FaUsers />,
            title: 'Unlimited Referrals',
            description: 'Refer as many friends and colleagues as you want'
        },
        {
            icon: <FaChartLine />,
            title: 'Track Your Progress',
            description: 'Monitor your referrals and earnings in real-time'
        },
        {
            icon: <FaHandHoldingUsd />,
            title: 'Fast Payouts',
            description: 'Receive your rewards within 30 days of successful setup'
        }
    ];

    const steps = [
        {
            number: '01',
            title: 'Refer your friend',
            description: 'Get in touch and refer so we can connect with them and provide consultation'
        },
        {
            number: '02',
            title: 'They Setup Business',
            description: 'Your referral completes their business setup with us'
        },
        {
            number: '03',
            title: 'You Earn Rewards',
            description: 'Receive your reward once their setup is complete'
        }
    ];

    const testimonials = [
        {
            name: 'Sarah Johnson',
            role: 'Business Owner',
            reward: 'AED 3,000',
            content: 'The referral program is fantastic! I\'ve earned over AED 3,000 by referring my network to NXTStar.'
        },
        {
            name: 'Mohammed Al Qasim',
            role: 'Entrepreneur',
            reward: 'AED 2,500',
            content: 'I love how simple it is to refer clients and earn rewards. The process is transparent and efficient.'
        },
        {
            name: 'Priya Sharma',
            role: 'Consultant',
            reward: 'AED 4,200',
            content: 'As a consultant, I\'ve been able to earn extra income by referring clients to NXTStar. Highly recommended!'
        }
    ];

    return (
        <PageLayout
            title="Refer & Earn"
            description="Refer businesses to NXTStar and earn rewards for successful referrals. Share your unique link and start earning today."
            headerImage="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
            headerOverlayColor="rgba(0, 0, 0, 0.1)"
        >
            <div className="refer-earn-page">
                {/* Hero Section */}
                <section className="refer-hero">
                    <div className="refer-hero-content">
                        <div className="refer-hero-text">
                            <h1 className="refer-hero-title">
                                <span className="highlight">Refer Friends,</span> Earn Rewards
                            </h1>
                            <p className="refer-hero-description">
                                Share NXTStar with your network and earn up to AED 1,000 for each successful business setup referral.
                                The more you refer, the more you earn!
                            </p>
                            <div className="refer-stats">
                                <div className="stat-item">
                                    <span className="stat-number">Up to AED 1,000</span>
                                    <span className="stat-label">Per Referral</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">Unlimited</span>
                                    <span className="stat-label">Referrals</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">30 Days</span>
                                    <span className="stat-label">Payout</span>
                                </div>
                            </div>
                        </div>
                        <div className="refer-hero-image">
                            <div className="reward-badge">
                                <FaGift className="reward-icon" />
                                <span className="reward-text">AED 1,000</span>
                                <span className="reward-text reut">Up to</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section className="refer-section">
                    <div className="section-header">
                        <h2 className="section-title">How It Works</h2>
                        <p className="section-description">
                            Earn rewards in just four simple steps
                        </p>
                    </div>
                    <div className="steps-container">
                        {steps.map((step, index) => (
                            <div className="step-card" key={index}>
                                <div className="step-number">{step.number}</div>
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-description">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Benefits */}
                <section className="refer-section benefits-section">
                    <div className="section-header">
                        <h2 className="section-title">Why Refer NXTStar?</h2>
                        <p className="section-description">
                            Great rewards for helping others succeed
                        </p>
                    </div>
                    <div className="benefits-grid">
                        {benefits.map((benefit, index) => (
                            <div className="benefit-card" key={index}>
                                <div className="benefit-icon">
                                    {benefit.icon}
                                </div>
                                <h3 className="benefit-title">{benefit.title}</h3>
                                <p className="benefit-description">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Referral Form */}
                <section className="refer-section form-section">
                    <div className="section-header">
                        <h2 className="section-title">Refer a Friend</h2>
                        <p className="section-description">
                            Fill in the details below to refer someone to NXTStar
                        </p>
                    </div>
                    <div className="refer-form-container">
                        <form className="refer-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Your Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Your Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Your Phone Number *</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-divider">
                                <span>Friend's Details</span>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="friendName">Friend's Name *</label>
                                    <input
                                        type="text"
                                        id="friendName"
                                        name="friendName"
                                        value={formData.friendName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="friendEmail">Friend's Email *</label>
                                    <input
                                        type="email"
                                        id="friendEmail"
                                        name="friendEmail"
                                        value={formData.friendEmail}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="friendPhone">Friend's Phone Number *</label>
                                <input
                                    type="tel"
                                    id="friendPhone"
                                    name="friendPhone"
                                    value={formData.friendPhone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <Button type="submit" className="submit-btn">
                                <FaShareAlt className="btn-icon" /> Submit Referral
                            </Button>
                        </form>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="refer-section testimonials-section">
                    <div className="section-header">
                        <h2 className="section-title">Success Stories</h2>
                        <p className="section-description">
                            Hear from our top referrers
                        </p>
                    </div>
                    <div className="testimonials-grid">
                        {testimonials.map((testimonial, index) => (
                            <div className="testimonial-card" key={index}>
                                <div className="testimonial-header">
                                    <div className="testimonial-avatar">
                                        <FaMedal className="avatar-icon" />
                                    </div>
                                    <div className="testimonial-info">
                                        <h3 className="testimonial-name">{testimonial.name}</h3>
                                        <p className="testimonial-role">{testimonial.role}</p>
                                    </div>
                                    <div className="testimonial-reward">
                                        <FaTrophy className="reward-trophy" />
                                        <span className="reward-amount">{testimonial.reward}</span>
                                    </div>
                                </div>
                                <p className="testimonial-content">"{testimonial.content}"</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="refer-section cta-section">
                    <div className="cta-content">
                        <h2 className="cta-title">Start Earning Today!</h2>
                        <p className="cta-description">
                            Join our referral program and start earning rewards for every successful business setup.
                        </p>
                        <Button to="/contact" type="primary" size="lg">
                            <FaHandHoldingUsd className="btn-icon" /> Contact Us to Learn More
                        </Button>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default ReferAndEarnPage;