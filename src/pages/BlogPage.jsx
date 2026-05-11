import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import Button from '../components/ui/Button';
import '../styles/pages/BlogPage.css';

// Helper function to create slugs from titles
const createSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')  // Remove special characters
        .replace(/\s+/g, '-')      // Replace spaces with hyphens
        .replace(/-+/g, '-');      // Replace multiple hyphens with single hyphen
};

const BlogPage = () => {
    // Sample blog data - in a real application, this would come from an API
    const [blogs] = useState([
        {
            id: 1,
            title: "Guide to Starting a Business in UAE Mainland",
            slug: "guide-to-starting-a-business-in-uae-mainland",
            excerpt: "Learn the step-by-step process of establishing your business in UAE mainland with 100% ownership.",
            date: "2025-09-15",
            author: "Nxtstar Team",
            category: "Business Setup",
            readTime: "5 min read",
            image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: 2,
            title: "Benefits of Freezone Company Formation in Dubai",
            slug: "benefits-of-freezone-company-formation-in-dubai",
            excerpt: "Discover why freezone companies are becoming the preferred choice for international businesses in Dubai.",
            date: "2025-08-22",
            author: "Nxtstar Team",
            category: "Freezone",
            readTime: "4 min read",
            image: "https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: 3,
            title: "Understanding UAE Tax Regulations for Foreign Businesses",
            slug: "understanding-uae-tax-regulations-for-foreign-businesses",
            excerpt: "A comprehensive guide to UAE tax laws and how they affect foreign business owners.",
            date: "2025-07-30",
            author: "Nxtstar Team",
            category: "Taxation",
            readTime: "6 min read",
            image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: 4,
            title: "How to Choose the Right Business Activity for Your UAE Company",
            slug: "how-to-choose-the-right-business-activity-for-your-uae-company",
            excerpt: "Tips and guidance on selecting the most suitable business activities for your UAE company license.",
            date: "2025-07-10",
            author: "Nxtstar Team",
            category: "Business Setup",
            readTime: "4 min read",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: 5,
            title: "Top 5 Freezones for Tech Startups in UAE",
            slug: "top-5-freezones-for-tech-startups-in-uae",
            excerpt: "Explore the best freezones in UAE for technology startups and their unique advantages.",
            date: "2025-06-18",
            author: "Nxtstar Team",
            category: "Freezone",
            readTime: "5 min read",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: 6,
            title: "Offshore vs Mainland: Which is Right for Your Business?",
            slug: "offshore-vs-mainland-which-is-right-for-your-business",
            excerpt: "A detailed comparison between offshore and mainland company setups in UAE.",
            date: "2025-05-25",
            author: "Nxtstar Team",
            category: "Business Setup",
            readTime: "7 min read",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
		},
		{
			id: 7,
			title: "How to Set Up a Foundation in the UAE: Step-by-Step Guide (2025)",
			slug: "how-to-set-up-a-foundation-in-the-uae-2025",
			excerpt: "A practical walkthrough for establishing a foundation in the UAE in 2025.",
			date: "2025-11-10",
			author: "Nxtstar Team",
			category: "Business Setup",
			readTime: "6 min read",
			image: "https://images.unsplash.com/photo-1528702748617-c64d49f918af?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
		},
		{
			id: 8,
			title: "Registering a Special Purpose Vehicle (SPV) in DIFC: Benefits & Process",
			slug: "registering-a-special-purpose-vehicle-spv-in-difc",
			excerpt: "Why and how to register a DIFC SPV, with steps and requirements.",
			date: "2025-11-10",
			author: "Nxtstar Team",
			category: "Business Setup",
			readTime: "5 min read",
			image: "https://images.unsplash.com/photo-1517817748493-49ec54a32465?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
		},
		{
			id: 9,
			title: "E-Trader License: What It Is and How to Get It in Dubai (2025)",
			slug: "e-trader-license-dubai-2025",
			excerpt: "Understand the Dubai E-Trader License and the 2025 application process.",
			date: "2025-11-10",
			author: "Nxtstar Team",
			category: "Business Setup",
			readTime: "4 min read",
			image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
		},
		{
			id: 10,
			title: "UAE Media Council Approval for Content Creators in 2025",
			slug: "uae-media-council-approval-content-creators-2025",
			excerpt: "Requirements and steps to obtain UAE Media Council approval in 2025.",
			date: "2025-11-10",
			author: "Nxtstar Team",
			category: "Advertiser Permit",
			readTime: "4 min read",
			image: "https://images.unsplash.com/photo-1647427017067-8f33ccbae493?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
		},
		{
			id: 11,
			title: "Golden Visa for Dubai Creators: How to Get it in 2026",
			slug: "golden-visa-for-content-creators",
			excerpt: "Golden visa process and steps for UAE Content Creators.",
			date: "2026-04-02",
			author: "Neha Jakhar",
			category: "Golden Visa",
			readTime: "3 min read",
			image: "https://plus.unsplash.com/premium_photo-1679362664450-4b2f9aa69841?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		{
		    id: 12,
		    title: "World Trade Centre Business Setup in Dubai: A Smart Free Zone Choice for Growing Companies",
		    slug: "world-trade-centre-business-setup-dubai",
		    excerpt: "Learn about DWTC Free Zone company setup, license types, office solutions, visa options, and why Dubai World Trade Centre is a smart choice for growing businesses.",
		    date: "2026-05-07",
		    author: "Nxtstar Team",
		    category: "Business Setup",
		    readTime: "3 min read",
		    image: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/b19ff560-6abe-5c14-8038-d597a9b5b701/cafc8026-fef8-58d0-ad2a-6e0e152efba3.jpg"
		},
		{
			id: 13,
		    title: "Dubai Investor Visa Updates in 2026: New Rules, Limits, and What Investors Should Know",
		    slug: "dubai-investor-visa-updates-2026",
		    excerpt: "Understand the latest Dubai investor visa updates in 2026, including new property ownership rules, eligibility changes, and residency requirements for investors.",
		  	date: "2026-05-07",
		    author: "Nxtstar Team",
		    category: "Investor Visa",
		    readTime: "3 min read",
		    image: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/619a2484-9aaa-5599-94c4-c13af07ad92b/c03a2367-3351-52a6-ba0a-6f3aaa026694.jpg"
		},
		{
			id: 14,
			title: "Special Tech Licences in DIFC and ADGM for AI Startups",
		    slug: "special-tech-licences-difc-adgm-ai-startups",
		    excerpt: "Explore the special startup-friendly tech licences available in DIFC and ADGM for AI startups in the UAE.",
		    date: "2026-05-18",
		    author: "Nxtstar Team",
		    category: "Business Setup",
		    readTime: "7 min read",
		    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1200",
		},
		{
			id: 15,
		    title: "National Media Authority Permit in the UAE for Publishing and Media Businesses",
		    slug: "national-media-authority-permit-uae-publishing-media-businesses",
		    excerpt: "A practical guide to the National Media Authority permit requirements for publishing, media, and digital content businesses in the UAE.",
		    date: "2026-02-18",
		    author: "Nxtstar Team",
		    category: "Business Setup",
		    readTime: "6 min read",
		    image: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/619a2484-9aaa-5599-94c4-c13af07ad92b/c03a2367-3351-52a6-ba0a-6f3aaa026694.jpg"
		},
		{
			id: 16,
		    title: "Office Options in Dubai Explained: Best Area for Office in Dubai for Business Owners",
		    slug: "office-options-dubai-best-area-office-business-owners",
		    excerpt: "A practical guide to choosing the right office type and business location in Dubai based on your business model and licensing needs.",
		    date: "2026-01-22",
		    author: "Nxtsar Team",
		    category: "Business Setup",
		    readTime: "9 min read",
		    image: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/619a2484-9aaa-5599-94c4-c13af07ad92b/c03a2367-3351-52a6-ba0a-6f3aaa026694.jpg"
		},
		{
			id: 17,
		    title: "DIFC PropTech Licence: Subsidised Startup Package Starting from USD 1,500",
		    slug: "difc-proptech-licence-subsidised-startup-package",
		    excerpt: "Discover how the DIFC PropTech Licence offers an affordable and premium setup option for real estate technology startups in Dubai.",
		    date: "2026-04-14",
		    author: "Nxtstar Team",
		    category: "Business Setup",
		    readTime: "5 min read",
		    image: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/619a2484-9aaa-5599-94c4-c13af07ad92b/c03a2367-3351-52a6-ba0a-6f3aaa026694.jpg"
		}		
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Get unique categories
    const categories = ['All', ...new Set(blogs.map(blog => blog.category))];

    // Filter blogs based on search and category
   // const filteredBlogs = blogs.filter(blog => {
     //   const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      //      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      //  const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
      //  return matchesSearch && matchesCategory;
	//code swap done to bring latest blogs first
	const filteredBlogs = blogs
    .filter(blog => {
        const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
        return matchesSearch && matchesCategory;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
   // });

    return (
        <PageLayout
            title="Blogs & Resources"
            description="Latest insights, updates, and resources on UAE business setup and related topics."
            headerImage="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
            headerOverlayColor="rgba(0, 0, 0, 0.1)"
        >
            <div className="blog-page">
                {/* Search and Filter Section */}
                <div className="blog-filters">
                    <div className="search-container">
                        <input
                            type="text"
                            placeholder="Search blogs..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-input"
                        />
                    </div>
                    <div className="category-filter">
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="category-select"
                        >
                            {categories.map(category => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {filteredBlogs.length > 0 ? (
                    <div className="blog-grid">
                        {filteredBlogs.map(blog => (
                            <Link
                                key={blog.id}
                                to={`/blog/${blog.slug}`}
                                className="blog-card"
                                style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                                <div className="blog-image">
                                    <img src={blog.image} alt={blog.title} />
                                </div>
                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <span className="blog-category">{blog.category}</span>
                                        <span className="blog-date">{blog.date}</span>
                                    </div>
                                    <h3 className="blog-title">{blog.title}</h3>
                                    <p className="blog-excerpt">{blog.excerpt}</p>
                                    <div className="blog-footer">
                                        <span className="blog-author">By {blog.author}</span>
                                        <span className="blog-read-time">{blog.readTime}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="no-results">
                        <h3>No blogs found</h3>
                        <p>Try adjusting your search or filter criteria</p>
                    </div>
                )}
                <div className="load-more-container">
                    <Button type="outline">Load More Articles</Button>
                </div>
            </div>
        </PageLayout>
    );
};

export default BlogPage;
