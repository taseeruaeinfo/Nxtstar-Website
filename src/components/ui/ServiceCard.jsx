import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../../styles/ServiceCard.css';

const ServiceCard = ({ icon, image, title, description, link }) => {
    return (
        <motion.div
            className="service-card"
            whileHover={{
                y: -10,
                boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)"
            }}
            transition={{
                type: "spring",
                stiffness: 300
            }}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <motion.div
                className="service-card-image-container"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                {image ? (
                    <img src={image} alt={title} className="service-card-image" />
                ) : (
                    <div className="service-card-icon">
                        {icon}
                    </div>
                )}
            </motion.div>
            <motion.h3
                className="service-card-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                {title}
            </motion.h3>
            <motion.p
                className="service-card-description"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                {description}
            </motion.p>
            {link && (
                <motion.div
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <Link to={link} className="service-card-link">
                        Learn More <FaArrowRight className="service-card-link-icon" />
                    </Link>
                </motion.div>
            )}
        </motion.div>
    );
};

export default ServiceCard;