import React, { useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import Button from '../components/ui/Button';
import { FaGift, FaUsers, FaChartLine, FaHandHoldingUsd, FaShareAlt, FaCheckCircle, FaMedal, FaTrophy } from 'react-icons/fa';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import '../styles/pages/ReferAndEarnPage.css';

const backend_url = import.meta.env.VITE_BACKEND_URL;

const ReferAndEarnPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        friendName: '',
        friendEmail: '',
        friendPhone: ''
    });
    
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    const handlePhoneChange = (value, name) => {
        setFormData({
            ...formData,
            [name]: value
        });
        
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        // Validate referrer fields
        if (!formData.name.trim()) newErrors.name = 'Your name is required';
        if (!formData.email.trim()) newErrors.email = 'Your email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Your email is invalid';
        if (!formData.phone || formData.phone.length < 6) newErrors.phone = 'Your phone number is required';
        
        // Validate friend fields
        if (!formData.friendName.trim()) newErrors.friendName = 'Friend\'s name is required';
        if (!formData.friendEmail.trim()) newErrors.friendEmail = 'Friend\'s email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.friendEmail)) newErrors.friendEmail = 'Friend\'s email is invalid';
        if (!formData.friendPhone || formData.friendPhone.length < 6) newErrors.friendPhone = 'Friend\'s phone number is required';
        
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        
        setIsSubmitting(true);
        
        // Prepare the data for submission with full phone numbers
        const referralData = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone, // Already includes country code from react-phone-input-2
            friendName: formData.friendName,
            friendEmail: formData.friendEmail,
            friendPhone: formData.friendPhone // Already includes country code from react-phone-input-2
        };
        
        try {
            const res = await fetch(`${backend_url}/api/refer`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(referralData),
            });

            const data = await res.json();
            console.log('Response:', data);
            
            if (data.success) {
                setSubmitSuccess(true);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    friendName: '',
                    friendEmail: '',
                    friendPhone: ''
                });
                // Reset success message after 5 seconds
                setTimeout(() => setSubmitSuccess(false), 5000);
            } else {
                alert("❌ Failed to submit referral: " + data.message);
            }
        } catch (err) {
            console.error(err);
            alert("⚠️ Something went wrong: " + err.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    const benefits = [
        {
            icon: <FaGift />,
            title: 'Attractive Rewards',
            description: 'Earn up to AED 2,000 for each successful referral'
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
                                Share NXTStar with your network and earn up to AED 2,000 for each successful business setup referral.
                                The more you refer, the more you earn!
                            </p>
                            <div className="refer-stats">
                                <div className="stat-item">
                                    <span className="stat-number">Up to AED 2,000</span>
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
                                <span className="reward-text">AED 2,000</span>
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
                        {submitSuccess ? (
                            <div className="success-message">
                                <FaCheckCircle className="success-icon" />
                                <h3>Thank You!</h3>
                                <p>Your referral has been submitted successfully. We'll contact you soon.</p>
                            </div>
                        ) : (
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
                                            className={errors.name ? 'error' : ''}
                                            required
                                        />
                                        {errors.name && <div className="error-message">{errors.name}</div>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Your Email *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={errors.email ? 'error' : ''}
                                            required
                                        />
                                        {errors.email && <div className="error-message">{errors.email}</div>}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Your Phone Number *</label>
                                    <PhoneInput
                                        country={'ae'}
                                        value={formData.phone}
                                        onChange={phone => handlePhoneChange(phone, 'phone')}
                                        inputProps={{
                                            name: 'phone',
                                            required: true,
                                            className: `form-control ${errors.phone ? 'error' : ''}`
                                        }}
                                        containerClass="phone-input-container"
                                        buttonClass="country-dropdown"
                                        dropdownClass="country-dropdown-list"
                                    />
                                    {errors.phone && <div className="error-message">{errors.phone}</div>}
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
                                            className={errors.friendName ? 'error' : ''}
                                            required
                                        />
                                        {errors.friendName && <div className="error-message">{errors.friendName}</div>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="friendEmail">Friend's Email *</label>
                                        <input
                                            type="email"
                                            id="friendEmail"
                                            name="friendEmail"
                                            value={formData.friendEmail}
                                            onChange={handleChange}
                                            className={errors.friendEmail ? 'error' : ''}
                                            required
                                        />
                                        {errors.friendEmail && <div className="error-message">{errors.friendEmail}</div>}
                                    </div>
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="friendPhone">Friend's Phone Number *</label>
                                    <PhoneInput
                                        country={'ae'}
                                        value={formData.friendPhone}
                                        onChange={phone => handlePhoneChange(phone, 'friendPhone')}
                                        inputProps={{
                                            name: 'friendPhone',
                                            required: true,
                                            className: `form-control ${errors.friendPhone ? 'error' : ''}`
                                        }}
                                        containerClass="phone-input-container"
                                        buttonClass="country-dropdown"
                                        dropdownClass="country-dropdown-list"
                                    />
                                    {errors.friendPhone && <div className="error-message">{errors.friendPhone}</div>}
                                </div>
                                
                                <Button type="submit" className="submit-btn" disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <>
                                            <span className="spinner" style={{ marginRight: '8px' }}></span>
                                            Submitting...
                                        </>
                                    ) : (
                                        <>
                                            <FaShareAlt className="btn-icon" /> Submit Referral
                                        </>
                                    )}
                                </Button>
                            </form>
                        )}
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