import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import '../../styles/TestimonialCard.css';

const TestimonialCard = ({ content, author, position, rating = 5, avatar }) => {
    return (
        <div className="testimonial-card">
            <div className="testimonial-quote">
                <FaQuoteLeft />
            </div>
            <p className="testimonial-content">{content}</p>
            <div className="testimonial-author">
                {avatar ? (
                    <img src={avatar} alt={author} className="testimonial-avatar" />
                ) : (
                    <div className="testimonial-avatar"></div>
                )}
                <div className="testimonial-info">
                    <h4 className="testimonial-name">{author}</h4>
                    <p className="testimonial-position">{position}</p>
                    <div className="testimonial-rating">
                        {[...Array(rating)].map((_, i) => (
                            <FaStar key={i} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;