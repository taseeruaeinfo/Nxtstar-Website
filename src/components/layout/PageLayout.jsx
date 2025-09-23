import { Link } from 'react-router-dom';
import '../../styles/PageLayout.css';

const PageLayout = ({
    title,
    description,
    breadcrumbs = [],
    children,
    showHeader = true
}) => {
    return (
        <div className="page-container">
            {showHeader && (
                <header className="page-header">
                    <div className="page-header-container">
                        {breadcrumbs.length > 0 && (
                            <nav className="breadcrumbs">
                                <span className="breadcrumb-item">
                                    <Link to="/" className="breadcrumb-link">Home</Link>
                                </span>
                                {breadcrumbs.map((breadcrumb, index) => (
                                    <span key={index} className="breadcrumb-item">
                                        {index === breadcrumbs.length - 1 ? (
                                            <span className="breadcrumb-active">{breadcrumb.label}</span>
                                        ) : (
                                            <Link to={breadcrumb.url} className="breadcrumb-link">{breadcrumb.label}</Link>
                                        )}
                                    </span>
                                ))}
                            </nav>
                        )}
                        <h1 className="page-title">{title}</h1>
                        {description && <p className="page-description">{description}</p>}
                    </div>
                </header>
            )}
            <main className="page-content">
                <div className="page-content-container">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default PageLayout;