import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import Button from '../components/ui/Button';
import '../styles/pages/BlogPostPage.css';

const BlogPostPage = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    // Sample blog data - in a real application, this would come from an API
    const sampleBlogs = [
        {
            id: 1,
            title: "Guide to Starting a Business in UAE Mainland",
            excerpt: "Learn the step-by-step process of establishing your business in UAE mainland with 100% ownership.",
            date: "2025-09-15",
            author: "NXTStar Team",
            category: "Business Setup",
            readTime: "5 min read",
            image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
            content: `
                <h2>Introduction</h2>
                <p>Setting up a business in UAE mainland offers unique advantages for entrepreneurs looking to establish a presence in the UAE with full operational flexibility. This comprehensive guide will walk you through the essential steps and requirements for establishing your business in UAE mainland with 100% ownership.</p>
                
                <h2>Understanding UAE Mainland Companies</h2>
                <p>UAE mainland companies are business entities that operate within the UAE's domestic market and can conduct business throughout the country. Unlike freezone companies, mainland companies require a local Emirati sponsor or service agent, unless you qualify for 100% foreign ownership under recent regulatory changes.</p>
                
                <h2>Key Requirements for Mainland Company Setup</h2>
                <ul>
                    <li>Trade Name Approval</li>
                    <li>Memorandum of Association (MOA)</li>
                    <li>Local Sponsor or Service Agent</li>
                    <li>Initial Approval Certificate</li>
                    <li>Tenancy Contract for Business Premises</li>
                    <li>Commercial License</li>
                </ul>
                
                <h2>Step-by-Step Process</h2>
                <h3>1. Trade Name Registration</h3>
                <p>The first step involves selecting and registering your business name with the Department of Economic Development (DED). Ensure your chosen name is unique and complies with UAE naming regulations.</p>
                
                <h3>2. Initial Approval</h3>
                <p>Obtain initial approval from the DED by submitting your business activity codes and other required documents. This approval confirms that your proposed business activities are permitted in the UAE mainland.</p>
                
                <h3>3. MOA Preparation</h3>
                <p>Draft the Memorandum of Association, which outlines the company's structure, shareholding pattern, and operational guidelines. This document must be notarized.</p>
                
                <h3>4. Local Sponsor or Service Agent</h3>
                <p>Unless you qualify for 100% ownership, you'll need a local Emirati sponsor who holds 51% of the shares, or a service agent who acts as a local representative without financial interest.</p>
                
                <h3>5. Tenancy Contract</h3>
                <p>Secure a commercial premises and obtain a tenancy contract. The premises must be approved as a business location by the DED.</p>
                
                <h3>6. License Application</h3>
                <p>Submit your application for a commercial license along with all required documents. The license will specify your permitted business activities.</p>
                
                <h2>Benefits of Mainland Company Setup</h2>
                <ul>
                    <li>Access to the entire UAE market</li>
                    <li>No restrictions on business activities</li>
                    <li>Ability to work with government entities</li>
                    <li>Option for 100% foreign ownership in certain sectors</li>
                    <li>Access to UAE residency visas for owners and employees</li>
                </ul>
                
                <h2>Conclusion</h2>
                <p>Setting up a mainland company in the UAE requires careful planning and adherence to regulatory requirements. With the right guidance and support, the process can be streamlined to establish your business presence in one of the world's most dynamic markets. Consider consulting with experts like NXTStar to navigate the complexities and ensure a smooth setup process.</p>
            `
        },
        {
            id: 2,
            title: "Benefits of Freezone Company Formation in Dubai",
            excerpt: "Discover why freezone companies are becoming the preferred choice for international businesses in Dubai.",
            date: "2025-08-22",
            author: "NXTStar Team",
            category: "Freezone",
            readTime: "4 min read",
            image: "https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
            content: `
                <h2>Introduction</h2>
                <p>Dubai's freezones have emerged as a magnet for international businesses seeking a strategic gateway to the Middle East, Africa, and South Asia markets. With their unique value proposition, freezone companies offer compelling advantages that make them an attractive option for entrepreneurs and corporations alike.</p>
                
                <h2>What are Freezones?</h2>
                <p>Freezones are designated areas within the UAE that operate under special regulations different from the mainland. These zones are designed to attract foreign investment by offering a business-friendly environment with various incentives and benefits.</p>
                
                <h2>Key Benefits of Freezone Company Formation</h2>
                <h3>1. 100% Foreign Ownership</h3>
                <p>One of the most significant advantages is the ability to own 100% of your business without requiring a local sponsor. This gives you complete control over your company's operations and decision-making.</p>
                
                <h3>2. Tax Advantages</h3>
                <p>Freezone companies enjoy significant tax benefits, including:
                    <ul>
                        <li>Zero corporate tax</li>
                        <li>Zero personal income tax</li>
                        <li>Zero import/export duties</li>
                        <li>Full repatriation of capital and profits</li>
                    </ul>
                </p>
                
                <h3>3. Business Flexibility</h3>
                <p>Freezone companies offer greater operational flexibility with:
                    <ul>
                        <li>No restrictions on business activities (subject to approval)</li>
                        <li>Ability to conduct both international and domestic trade</li>
                        <li>Access to world-class infrastructure and facilities</li>
                    </ul>
                </p>
                
                <h3>4. Strategic Location</h3>
                <p>Dubai's position as a global business hub provides easy access to over 3.5 billion consumers in the Middle East, Africa, and South Asia regions. The city's world-class logistics infrastructure further enhances this advantage.</p>
                
                <h3>5. Visa Benefits</h3>
                <p>Freezone companies can sponsor visas for employees and investors, making it easier to build and maintain your team in Dubai.</p>
                
                <h2>Popular Dubai Freezones</h2>
                <ul>
                    <li>Dubai Multi Commodities Centre (DMCC)</li>
                    <li>Dubai Internet City</li>
                    <li>Dubai Media City</li>
                    <li>International Media Production Zone (IMPZ)</li>
                    <li>Dubai Airport Freezone (DAFZA)</li>
                </ul>
                
                <h2>Choosing the Right Freezone</h2>
                <p>Selecting the appropriate freezone depends on your business activities, budget, and specific requirements. Factors to consider include:
                    <ul>
                        <li>Industry focus of the freezone</li>
                        <li>Cost structure and licensing fees</li>
                        <li>Available facilities and services</li>
                        <li>Location and accessibility</li>
                        <li>Reputation and track record</li>
                    </ul>
                </p>
                
                <h2>Conclusion</h2>
                <p>Dubai's freezones offer a compelling proposition for businesses looking to establish a presence in the UAE and the broader region. With their combination of tax benefits, operational flexibility, and strategic location, they continue to attract businesses from around the world. Partnering with experts like NXTStar can help you navigate the selection and setup process to find the best fit for your business needs.</p>
            `
        }
    ];

    useEffect(() => {
        // Simulate API call
        setTimeout(() => {
            const foundBlog = sampleBlogs.find(blog => blog.id === parseInt(id));
            setBlog(foundBlog);
            setLoading(false);
        }, 500);
    }, [id]);

    if (loading) {
        return (
            <PageLayout
                title="Loading..."
                headerImage="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                headerOverlayColor="rgba(0, 0, 0, 0.1)"
            >
                <div className="blog-post-loading">
                    <p>Loading blog post...</p>
                </div>
            </PageLayout>
        );
    }

    if (!blog) {
        return (
            <PageLayout
                title="Blog Not Found"
                headerImage="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                headerOverlayColor="rgba(0, 0, 0, 0.7)"
            >
                <div className="blog-post-not-found">
                    <h2>Blog Post Not Found</h2>
                    <p>The blog post you're looking for doesn't exist or has been removed.</p>
                    <Button to="/blogs" type="primary">Back to Blogs</Button>
                </div>
            </PageLayout>
        );
    }

    return (
        <PageLayout
            title={blog.title}
            description={blog.excerpt}
            headerImage={blog.image}
            headerOverlayColor="rgba(0, 0, 0, 0.8)"
        >
            <div className="blog-post-page">
                <div className="blog-post-header">
                    <div className="blog-post-meta">
                        <span className="blog-post-category">{blog.category}</span>
                        <span className="blog-post-date">{blog.date}</span>
                        <span className="blog-post-read-time">{blog.readTime}</span>
                    </div>
                    <h1 className="blog-post-title">{blog.title}</h1>
                    <div className="blog-post-author">By {blog.author}</div>
                </div>

                <div className="blog-post-image">
                    <img src={blog.image} alt={blog.title} />
                </div>

                <div className="blog-post-content">
                    <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                </div>

                <div className="blog-post-navigation">
                    <Button to="/blogs" type="outline">← Back to Blogs</Button>
                </div>
            </div>
        </PageLayout>
    );
};

export default BlogPostPage;