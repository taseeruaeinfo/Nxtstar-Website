import { useState } from 'react';

import PageLayout from '../components/layout/PageLayout';
import Button from '../components/ui/Button';
import { FaUser, FaPhoneAlt, FaEnvelope, FaRegBuilding, FaCheckCircle } from 'react-icons/fa';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import '../styles/pages/Contact.css';
import contactimg from '../assets/images/contact.jpg';

const backend_url = import.meta.env.VITE_BACKEND_URL;

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
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

    const handlePhoneChange = (value) => {
        setFormData({ ...formData, mobile: value });
        if (errors.mobile) setErrors({ ...errors, mobile: '' });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.mobile || formData.mobile.length < 6) newErrors.mobile = 'Mobile is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.details.trim()) newErrors.details = 'Business details required';
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

        // Prepare the data for submission
        const contactData = {
            name: formData.name,
            phone: formData.mobile, // Already includes country code from react-phone-input-2
            email: formData.email,
            message: formData.details
        };

        try {
            const res = await fetch(`${backend_url}/api/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(contactData),
            });

            const data = await res.json();
            console.log('Response:', data);

            if (data.success) {
                setSubmitSuccess(true);
                setFormData({
                    name: '',
                    mobile: '',
                    email: '',
                    details: ''
                });
                // Reset success message after 5 seconds
                setTimeout(() => setSubmitSuccess(false), 5000);
            } else {
                alert("❌ Failed to send message: " + data.message);
            }
        } catch (err) {
            console.error(err);
            alert("⚠️ Something went wrong: " + err.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <PageLayout
            title="Contact Us"
            description="Get in touch with NXTStar for all your UAE business setup needs. We're here to help you start, scale, and succeed in the UAE."
            headerImage="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
            headerOverlayColor="rgba(0, 0, 0, 0.1)"
        >
            <div className="contact-page">
                {/* Company Contact Details Section */}
                <div className="company-contact-details">
                    <h2>Get in Touch</h2>
                    <p className="contact-intro">Have questions about our services? Reach out to us using any of the contact methods below:</p>

                    <div className="contact-cards-container">
                        <div className="contact-card">
                            <div className="contact-icon">
                                <FaPhoneAlt />
                            </div>
                            <h3>Call Us</h3>
                            <p>+971 58 259 4158</p>
                        </div>

                        <div className="contact-card">
                            <div className="contact-icon">
                                <FaEnvelope />
                            </div>
                            <h3>Email Us</h3>
                            <p>nehajakhar@nxtstar.ae</p>
                        </div>

                        <div className="contact-card">
                            <div className="contact-icon">
                                <FaRegBuilding />
                            </div>
                            <h3>Visit Us</h3>
                            <p>Palace Tower, Dubai Silicon Oasis Dubai,</p>
                            <p>United Arab Emirates</p>
                        </div>
                    </div>

                    {/* Google Rating Link */}
                    <div className="google-rating-section">
                        <a href="https://g.page/r/CfH-m2147vEREBI/review"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="google-rating-link">
                            <div className="google-rating-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="#4285F4" d="M12 11h8.29c.11.63.18 1.28.18 1.95 0 5.52-3.73 9.41-9 9.41-5.27 0-9.56-4.22-9.56-9.48C1.91 7.63 6.2 3.4 11.47 3.4c2.5 0 4.74 1.03 6.36 2.64l-2.58 2.58c-.71-.68-1.97-1.47-3.78-1.47-3.24 0-5.88 2.69-5.88 5.91s2.64 5.91 5.88 5.91c3.75 0 5.16-2.69 5.38-4.07H12v-3.9z" />
                                </svg>
                            </div>
                            <span>Drop Your Review on Google</span>
                            <span className="rating-stars">★★★★★</span>
                        </a>
                    </div>
                </div>

                <div className="contact-form-image-row">
                    <div className="contact-image-col">
                        <img
                            src={contactimg}
                            alt="Contact Illustration"
                            className="contact-side-image"
                        />
                    </div>
                    <div className="contact-form-wrapper">
                        <h2>Send us a Message</h2>
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
                                        <PhoneInput
                                            country={'ae'}
                                            value={formData.mobile}
                                            onChange={handlePhoneChange}
                                            inputProps={{
                                                name: 'mobile',
                                                required: true,
                                                className: `form-control ${errors.mobile ? 'error' : ''}`
                                            }}
                                            containerClass="phone-input-container"
                                            buttonClass="country-dropdown"
                                            dropdownClass="country-dropdown-list"
                                        />
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
