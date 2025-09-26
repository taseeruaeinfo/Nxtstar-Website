import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../../styles/Button.css';

const Button = ({
    children,
    type = 'primary',
    size = 'md',
    to = '',
    href = '',
    onClick = () => { },
    className = '',
    block = false,
    ...props
}) => {
    // Determine button classes
    const buttonClasses = [
        'button',
        `button-${type}`,
        size !== 'md' ? `button-${size}` : '',
        block ? 'button-block' : '',
        className
    ].filter(Boolean).join(' ');

    // Motion animation props
    const motionProps = {
        initial: { opacity: 0, scale: 0.8 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true, amount: 0.3 },
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.98 },
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 17
        }
    };

    // Render as Link if 'to' prop is provided (internal link)
    if (to) {
        return (
            <motion.div {...motionProps}>
                <Link to={to} className={buttonClasses} {...props}>
                    {children}
                </Link>
            </motion.div>
        );
    }

    // Render as anchor tag if 'href' prop is provided (external link)
    if (href) {
        return (
            <motion.div {...motionProps}>
                <a href={href} className={buttonClasses} {...props}>
                    {children}
                </a>
            </motion.div>
        );
    }

    // Otherwise render as button
    return (
        <motion.button
            type="button"
            className={buttonClasses}
            onClick={onClick}
            {...props}
            {...motionProps}
        >
            {children}
        </motion.button>
    );
};

export default Button;