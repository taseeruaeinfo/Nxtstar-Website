import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import BusinessSetupPage from './pages/BusinessSetupPage';
import ServicesPage from './pages/ServicesPage';
import PageLayout from './components/layout/PageLayout';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import { AnimatePresence } from 'framer-motion';
import MotionWrapper from './components/ui/MotionWrapper';
import './styles/index.css';

// AnimationLayout component to handle location-based animations
function AnimationLayout() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Home Page */}
        <Route path="/" element={
          <MotionWrapper>
            <HomePage />
          </MotionWrapper>
        } />

        {/* Business Setup Pages */}
        <Route path="/business/*" element={
          <MotionWrapper>
            <BusinessSetupPage />
          </MotionWrapper>
        } />

        {/* Services Pages */}
        <Route path="/services/*" element={
          <MotionWrapper>
            <ServicesPage />
          </MotionWrapper>
        } />

        {/* Blogs Page */}
        <Route path="/blogs" element={
          <MotionWrapper>
            <PageLayout
              title="Blogs & Resources"
              description="Latest insights, updates, and resources on UAE business setup and related topics."
              breadcrumbs={[{ label: 'Blogs', url: '/blogs' }]}
            >
              <div>Blogs Coming Soon</div>
            </PageLayout>
          </MotionWrapper>
        } />

        {/* Contact Us Page */}
        <Route path="/contact" element={
          <MotionWrapper>
            <Contact />
          </MotionWrapper>
        } />

        {/* FAQs Page */}
        <Route path="/faqs" element={
          <MotionWrapper>
            <FAQ />
          </MotionWrapper>
        } />

        {/* Refer & Earn Page */}
        <Route path="/refer-earn" element={
          <MotionWrapper>
            <PageLayout
              title="Refer & Earn"
              description="Refer businesses to us and earn rewards for successful referrals."
              breadcrumbs={[{ label: 'Refer & Earn', url: '/refer-earn' }]}
            >
              <div>Refer & Earn Page Coming Soon</div>
            </PageLayout>
          </MotionWrapper>
        } />

        {/* 404 Page */}
        <Route path="*" element={
          <MotionWrapper>
            <PageLayout
              title="Page Not Found"
              description="The page you are looking for does not exist or has been moved."
              showHeader={true}
            >
              <div>404 - Page Not Found</div>
            </PageLayout>
          </MotionWrapper>
        } />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <AnimationLayout />
      <Footer />
    </Router>
  );
}

export default App
