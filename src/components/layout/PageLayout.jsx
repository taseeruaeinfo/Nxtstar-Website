import SEO from './SEO';
import '../../styles/PageLayout.css';

/** @param {Record<string, any>} props */
const PageLayout = ({
    title,
    description,
    seoTitle,
    seoDescription,
    noindex = false,
    ogType,
    jsonLd,
    children,
    showHeader = true,
    headerImage = null,
    headerOverlayColor = 'rgba(0, 0, 0, 0.8)'
}) => {
    return (
        <div className="page-container">
            <SEO
                title={seoTitle || title}
                description={seoDescription || description}
                noindex={noindex}
                ogType={ogType}
                jsonLd={jsonLd}
            />
            {showHeader && (
                <header className="page-header" style={headerImage ? {
                    backgroundImage: `linear-gradient(${headerOverlayColor}, ${headerOverlayColor}), url(${headerImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                } : {}}>
                    <div className="page-header-container">
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
