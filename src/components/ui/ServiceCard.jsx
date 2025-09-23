import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import '../../styles/ServiceCard.css';

const ServiceCard = ({ icon, title, description, link }) => {
    return (
        <div className="service-card">
            <div className="service-card-icon">
                {icon}
            </div>
            <h3 className="service-card-title">{title}</h3>
            <p className="service-card-description">{description}</p>
            {link && (
                <Link to={link} className="service-card-link">
                    Learn More <FaArrowRight className="service-card-link-icon" />
                </Link>
            )}
        </div>
    );
};

export default ServiceCard;