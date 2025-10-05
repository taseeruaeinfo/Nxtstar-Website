import { useState } from 'react';

import PageLayout from '../components/layout/PageLayout';
import Button from '../components/ui/Button';
import { FaUser, FaPhoneAlt, FaEnvelope, FaRegBuilding, FaCheckCircle } from 'react-icons/fa';
import '../styles/pages/Contact.css';
import contactimg from '../assets/images/contact.jpg';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        countryCode: '+971',
        mobile: '',
        email: '',
        details: '',
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errors[name]) setErrors({ ...errors, [name]: '' });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.mobile.trim()) newErrors.mobile = 'Mobile is required';
        if (!formData.countryCode.trim()) newErrors.countryCode = 'Country code required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.details.trim()) newErrors.details = 'Business details required';
        return newErrors;
    };

    const getFlagStyle = (code) => {
        const flags = {
            '+971': 'url(https://flagcdn.com/16x12/ae.png)',
            '+91': 'url(https://flagcdn.com/16x12/in.png)',
            '+44': 'url(https://flagcdn.com/16x12/gb.png)',
            '+1': 'url(https://flagcdn.com/16x12/us.png)',
            '+92': 'url(https://flagcdn.com/16x12/pk.png)',
        };
        return {
            backgroundImage: flags[code] || 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitSuccess(true);
            setFormData({ name: '', mobile: '', email: '', details: '' });
            // Reset success message after 5 seconds
            setTimeout(() => setSubmitSuccess(false), 5000);
        }, 1500);
    };

    return (
        <PageLayout
            title="Contact Us"
            description="Get in touch with NXTStar for all your UAE business setup needs. We're here to help you start, scale, and succeed in the UAE."
            breadcrumbs={[
                // { label: 'Home', url: '/' },
                { label: 'Contact', url: '/contact' }
            ]}
        >
            <div className="contact-page">
                <div className="contact-form-image-row">
                    <div className="contact-image-col">
                        <img
                            src={contactimg}
                            alt="Contact Illustration"
                            className="contact-side-image"
                        />
                    </div>
                    <div className="contact-form-wrapper">
                        <h2>Contact Us</h2>
                        {submitSuccess ? (
                            <div className="success-message">
                                <FaCheckCircle className="success-icon" />
                                <h3>Thank You!</h3>
                                <p>Your message has been sent successfully. We'll get back to you within 24 hours.</p>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">
                                        <FaUser className="input-icon" /> Full Name <span className="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className={errors.name ? 'error' : ''}
                                        placeholder="Enter your full name"
                                    />
                                    {errors.name && <div className="error-message">{errors.name}</div>}
                                </div>
                                
                                <div className="form-row">
                                    <div className="form-group phone-group">
                                        <label htmlFor="mobile">
                                            <FaPhoneAlt className="input-icon" /> Mobile Number <span className="required">*</span>
                                        </label>
                                        <div className="phone-input-wrapper">
                                            <div 
                                                className="country-flag" 
                                                style={getFlagStyle(formData.countryCode)}
                                            ></div>
                                            <select
                                                name="countryCode"
                                                value={formData.countryCode}
                                                onChange={handleInputChange}
                                                className={errors.countryCode ? 'error country-code-select' : 'country-code-select'}
                                            >
                                                <option value="+971">+971 (UAE)</option>
                                                <option value="+91">+91 (India)</option>
                                                <option value="+44">+44 (UK)</option>
                                                <option value="+1">+1 (USA)</option>
                                                <option value="+92">+92 (Pakistan)</option>
                                            </select>
                                            <input
                                                type="tel"
                                                id="mobile"
                                                name="mobile"
                                                value={formData.mobile}
                                                onChange={handleInputChange}
                                                className={errors.mobile ? 'error phone-input' : 'phone-input'}
                                                placeholder="Enter mobile number"
                                            />
                                        </div>
                                        {errors.countryCode && <div className="error-message">{errors.countryCode}</div>}
                                        {errors.mobile && <div className="error-message">{errors.mobile}</div>}
                                    </div>
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="email">
                                        <FaEnvelope className="input-icon" /> Email Address <span className="required">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={errors.email ? 'error' : ''}
                                        placeholder="Enter your email address"
                                    />
                                    {errors.email && <div className="error-message">{errors.email}</div>}
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="details">
                                        <FaRegBuilding className="input-icon" /> Business Details <span className="required">*</span>
                                    </label>
                                    <textarea
                                        id="details"
                                        name="details"
                                        value={formData.details}
                                        onChange={handleInputChange}
                                        className={errors.details ? 'error' : ''}
                                        placeholder="Tell us about your business needs and requirements"
                                        rows={4}
                                    ></textarea>
                                    {errors.details && <div className="error-message">{errors.details}</div>}
                                </div>
                                
                                <div className="form-submit">
                                    <Button type="submit" size="lg" disabled={isSubmitting}>
                                        {isSubmitting ? 'Sending Message...' : 'Send Message'}
                                    </Button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
            <div className="map-section">
                <h3>Our Location in Dubai</h3>
                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14439.951609602107!2d55.27547811491486!3d25.18599433959108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682829c85c07%3A0xa5eda9fb3c93b69d!2sBusiness%20Bay%20-%20Dubai!5e0!3m2!1sen!2sae!4v1695076964609!5m2!1sen!2sae"
                        width="100%"
                        height="320"
                        style={{ border: 0, display: 'block', margin: '0 auto' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="NXTStar Location"
                    ></iframe>
                </div>
            </div>
        </PageLayout>
    );
};

export default Contact;