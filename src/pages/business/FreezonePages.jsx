import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageLayout from '../../components/layout/PageLayout';
import FreezoneOverview from './freezone/FreezoneOverview';
import '../../styles/pages/business/FreezonePages.css';

const FreezonePages = () => {
    return (
        <Routes>
            <Route path="/" element={<FreezoneOverview />} />
            {/* Add routes for specific free zones */}
            <Route path="/jafza" element={
                <PageLayout
                    title="JAFZA Free Zone"
                    description="Set up your business in Jebel Ali Free Zone, one of Dubai's most established free zones."
                    headerImage="https://images.unsplash.com/photo-1542744094-24638eff58bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                    headerOverlayColor="rgba(0, 0, 0, 0.7)"
                >
                    <div className="freezone-detail-page">
                        <h2>JAFZA Free Zone Coming Soon</h2>
                        <p>Detailed information about JAFZA Free Zone will be available soon.</p>
                    </div>
                </PageLayout>
            } />
            <Route path="/dmcc" element={
                <PageLayout
                    title="DMCC Free Zone"
                    description="Set up your business in Dubai Multi Commodities Centre, perfect for trading companies."
                    headerImage="https://images.unsplash.com/photo-1542744094-24638eff58bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                    headerOverlayColor="rgba(0, 0, 0, 0.7)"
                >
                    <div className="freezone-detail-page">
                        <h2>DMCC Free Zone Coming Soon</h2>
                        <p>Detailed information about DMCC Free Zone will be available soon.</p>
                    </div>
                </PageLayout>
            } />
            <Route path="/dwtc" element={
                <PageLayout
                    title="DWTC Free Zone"
                    description="Set up your business in Dubai World Trade Centre Free Zone, strategically located in the heart of Dubai."
                    headerImage="https://images.unsplash.com/photo-1542744094-24638eff58bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                    headerOverlayColor="rgba(0, 0, 0, 0.7)"
                >
                    <div className="freezone-detail-page">
                        <h2>DWTC Free Zone Coming Soon</h2>
                        <p>Detailed information about DWTC Free Zone will be available soon.</p>
                    </div>
                </PageLayout>
            } />
            <Route path="*" element={
                <PageLayout
                    title="Free Zone Not Found"
                    description="The free zone you are looking for does not exist."
                    headerImage="https://images.unsplash.com/photo-1542744094-24638eff58bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                    headerOverlayColor="rgba(0, 0, 0, 0.7)"
                >
                    <div className="freezone-not-found">
                        <h2>Free Zone Not Found</h2>
                        <p>The free zone you are looking for does not exist or has been moved.</p>
                        <a href="/business/freezone" className="back-link">Back to Free Zones</a>
                    </div>
                </PageLayout>
            } />
        </Routes>
    );
};

export default FreezonePages;