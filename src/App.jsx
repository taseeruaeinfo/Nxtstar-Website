import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import BusinessSetupPage from './pages/BusinessSetupPage';
import ServicesPage from './pages/ServicesPage';
import PageLayout from './components/layout/PageLayout';
import './styles/index.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<HomePage />} />

        {/* Business Setup Pages */}
        <Route path="/business/*" element={<BusinessSetupPage />} />

        {/* Services Pages */}
        <Route path="/services/*" element={<ServicesPage />} />

        {/* Blogs Page */}
        <Route path="/blogs" element={
          <PageLayout
            title="Blogs & Resources"
            description="Latest insights, updates, and resources on UAE business setup and related topics."
            breadcrumbs={[{ label: 'Blogs', url: '/blogs' }]}
          >
            <div>Blogs Coming Soon</div>
          </PageLayout>
        } />

        {/* Contact Us Page */}
        <Route path="/contact" element={
          <PageLayout
            title="Contact Us"
            description="Get in touch with our team for inquiries, consultations, or support."
            breadcrumbs={[{ label: 'Contact', url: '/contact' }]}
          >
            <div>Contact Us Page Coming Soon</div>
          </PageLayout>
        } />

        {/* FAQs Page */}
        <Route path="/faqs" element={
          <PageLayout
            title="Frequently Asked Questions"
            description="Find answers to common questions about business setup in the UAE."
            breadcrumbs={[{ label: 'FAQs', url: '/faqs' }]}
          >
            <div>FAQs Coming Soon</div>
          </PageLayout>
        } />

        {/* Refer & Earn Page */}
        <Route path="/refer-earn" element={
          <PageLayout
            title="Refer & Earn"
            description="Refer businesses to us and earn rewards for successful referrals."
            breadcrumbs={[{ label: 'Refer & Earn', url: '/refer-earn' }]}
          >
            <div>Refer & Earn Page Coming Soon</div>
          </PageLayout>
        } />

        {/* 404 Page */}
        <Route path="*" element={
          <PageLayout
            title="Page Not Found"
            description="The page you are looking for does not exist or has been moved."
            showHeader={true}
          >
            <div>404 - Page Not Found</div>
          </PageLayout>
        } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
