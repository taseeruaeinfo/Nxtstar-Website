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
            author: "NXTStar Team",
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
            author: "NXTStar Team",
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
            author: "NXTStar Team",
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
            author: "NXTStar Team",
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
            author: "NXTStar Team",
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
            author: "NXTStar Team",
            category: "Business Setup",
            readTime: "7 min read",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
        }
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Get unique categories
    const categories = ['All', ...new Set(blogs.map(blog => blog.category))];

    // Filter blogs based on search and category
    const filteredBlogs = blogs.filter(blog => {
        const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

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