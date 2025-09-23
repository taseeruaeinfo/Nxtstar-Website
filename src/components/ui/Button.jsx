import { Link } from 'react-router-dom';
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

    // Render as Link if 'to' prop is provided (internal link)
    if (to) {
        return (
            <Link to={to} className={buttonClasses} {...props}>
                {children}
            </Link>
        );
    }

    // Render as anchor tag if 'href' prop is provided (external link)
    if (href) {
        return (
            <a href={href} className={buttonClasses} {...props}>
                {children}
            </a>
        );
    }

    // Otherwise render as button
    return (
        <button
            type="button"
            className={buttonClasses}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;