import { useState } from 'react';

import PageLayout from '../components/layout/PageLayout';
import Button from '../components/ui/Button';
import { FaUser, FaPhoneAlt, FaEnvelope, FaRegBuilding } from 'react-icons/fa';
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

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitSuccess(true);
            setFormData({ name: '', mobile: '', email: '', details: '' });
            setTimeout(() => setSubmitSuccess(false), 4000);
        }, 1200);
    };

    return (
        <PageLayout

            breadcrumbs={[
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
                        <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem', color: 'var(--color-primary)' }}>Contact Form</h2>
                        {submitSuccess ? (
                            <div className="success-message">
                                <h3>Thank you!</h3>
                                <p>Your message has been sent. We'll get back to you soon.</p>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group icon-input">
                                    <label htmlFor="name">Name <span className="required">*</span></label>
                                    <div className="input-icon-wrapper">
                                        <span className="input-icon"><FaUser /></span>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className={errors.name ? 'error' : ''}
                                            placeholder="Your name"
                                        />
                                    </div>
                                    {errors.name && <div className="error-message">{errors.name}</div>}
                                </div>
                                <div className="form-group icon-input">
                                    <label htmlFor="mobile">Mobile <span className="required">*</span></label>
                                    <div className="input-icon-wrapper">
                                        <span className="input-icon"><FaPhoneAlt /></span>
                                        <select
                                            name="countryCode"
                                            value={formData.countryCode}
                                            onChange={handleInputChange}
                                            className={errors.countryCode ? 'error country-code-select' : 'country-code-select'}
                                            style={{ marginRight: '0.5rem', minWidth: 80 }}
                                        >
                                            <option value="+971">+971</option>
                                            <option value="+91">+91</option>
                                            <option value="+44">+44</option>
                                            <option value="+1">+1</option>
                                            <option value="+92">+92</option>
                                        </select>
                                        <input
                                            type="tel"
                                            id="mobile"
                                            name="mobile"
                                            value={formData.mobile}
                                            onChange={handleInputChange}
                                            className={errors.mobile ? 'error' : ''}
                                            placeholder="Your mobile number"
                                            style={{ flex: 1 }}
                                        />
                                    </div>
                                    {errors.countryCode && <div className="error-message">{errors.countryCode}</div>}
                                    {errors.mobile && <div className="error-message">{errors.mobile}</div>}
                                </div>
                                <div className="form-group icon-input">
                                    <label htmlFor="email">Email <span className="required">*</span></label>
                                    <div className="input-icon-wrapper">
                                        <span className="input-icon"><FaEnvelope /></span>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className={errors.email ? 'error' : ''}
                                            placeholder="Your email"
                                        />
                                    </div>
                                    {errors.email && <div className="error-message">{errors.email}</div>}
                                </div>
                                <div className="form-group icon-input">
                                    <label htmlFor="details">Business Details <span className="required">*</span></label>
                                    <div className="input-icon-wrapper">
                                        <span className="input-icon"><FaRegBuilding /></span>
                                        <textarea
                                            id="details"
                                            name="details"
                                            value={formData.details}
                                            onChange={handleInputChange}
                                            className={errors.details ? 'error' : ''}
                                            placeholder="Describe your business needs"
                                            rows={3}
                                        ></textarea>
                                    </div>
                                    {errors.details && <div className="error-message">{errors.details}</div>}
                                </div>
                                <div className="form-submit" style={{ marginTop: 16 }}>
                                    <Button type="primary" size="md" disabled={isSubmitting}>
                                        {isSubmitting ? 'Sending...' : 'Submit'}
                                    </Button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
            <div className="map-section">
                <h3>Our Location</h3>
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
