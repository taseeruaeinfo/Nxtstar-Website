import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import blogPosts from '../data/blogPosts';
import '../styles/pages/BlogPage.css';

const BlogPage = () => {
    const blogs = blogPosts;

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
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
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
                                    <img src={blog.image} alt={blog.title} loading="lazy" decoding="async" />
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
            </div>
        </PageLayout>
    );
};

export default BlogPage;
