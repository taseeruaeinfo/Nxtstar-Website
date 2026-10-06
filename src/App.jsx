import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import BusinessSetupPage from './pages/BusinessSetupPage';
import ServicesPage from './pages/ServicesPage';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ReferAndEarnPage from './pages/ReferAndEarnPage';
import CostCalculatorSuccess from './pages/CostCalculatorSuccess';
import { AnimatePresence } from 'framer-motion';
import MotionWrapper from './components/ui/MotionWrapper';
import './styles/index.css';
import ScrollToTop from './context/ScrollToTop';
import PrivacyPolicy from './pages/PrivacyPage';

// AnimationLayout component to handle location-based animations
function AnimationLayout() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait" initial={false}>
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
            <BlogPage />
          </MotionWrapper>
        } />

        {/* Individual Blog Post Page */}
        <Route path="/blog/:slug" element={
          <MotionWrapper>
            <BlogPostPage />
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
            <ReferAndEarnPage />
          </MotionWrapper>
        } />

        {/* Cost Calculator Success Page */}
        <Route path="/cost-calculator-success" element={
          <MotionWrapper>
            <CostCalculatorSuccess />
          </MotionWrapper>
        } />

        {/* Sys Page */}
        <Route path="/privacy-policy" element={
          <MotionWrapper>
            <PrivacyPolicy />
          </MotionWrapper>
        } />


        {/* 404 Page */}
        <Route path="*" element={
          <MotionWrapper>
            <NotFound />
          </MotionWrapper>
        } />
      </Routes>
      </AnimatePresence>
    </>
  );
}

// The router is supplied by the entry file: BrowserRouter in the browser,
// StaticRouter when prerendering.
function App() {
  return (
    <>
      <Navbar />
      <AnimationLayout />
      <Footer />
    </>
  );
}

export default App
