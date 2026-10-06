import { Link } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';

const NotFound = () => (
    <PageLayout
        title="Page Not Found"
        description="The page you are looking for does not exist or has been moved."
        noindex
    >
        <div className="not-found-page">
            <h2>We could not find that page</h2>
            <p>The address may be mistyped, or the page may have moved.</p>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/business">Business setup</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact us</Link></li>
            </ul>
        </div>
    </PageLayout>
);

export default NotFound;
