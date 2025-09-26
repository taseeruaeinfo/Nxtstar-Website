import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../../styles/TestimonialCard.css';

const TestimonialCard = ({ content, author, position, rating = 5, avatar }) => {
    return (
        <motion.div
            className="testimonial-card"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 300, damping: 15 }}
            whileHover={{
                y: -5,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.12)"
            }}
        >
            <motion.div
                className="testimonial-quote"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
            >
                <FaQuoteLeft />
            </motion.div>
            <motion.p
                className="testimonial-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                {content}
            </motion.p>
            <motion.div
                className="testimonial-author"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                {avatar ? (
                    <motion.img
                        src={avatar}
                        alt={author}
                        className="testimonial-avatar"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: "spring" }}
                    />
                ) : (
                    <motion.div
                        className="testimonial-avatar"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: "spring" }}
                    ></motion.div>
                )}
                <div className="testimonial-info">
                    <motion.h4
                        className="testimonial-name"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        {author}
                    </motion.h4>
                    <motion.p
                        className="testimonial-position"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                    >
                        {position}
                    </motion.p>
                    <motion.div
                        className="testimonial-rating"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        {[...Array(rating)].map((_, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8 + (i * 0.1) }}
                            >
                                <FaStar />
                            </motion.span>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default TestimonialCard;