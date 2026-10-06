import { useParams } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import Button from '../components/ui/Button';
import blogPosts from '../data/blogPosts';
import '../styles/pages/BlogPostPage.css';

const BlogPostPage = () => {
    const { slug } = useParams();
    const blog = blogPosts.find(post => post.slug === slug);

    if (!blog) {
        return (
            <PageLayout
                title="Blog Not Found"
                noindex
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
            ogType="article"
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
                                        <div className="blog-post-author">By {blog.author}</div>
                </div>

                <div className="blog-post-image">
                    <img src={blog.image} alt={blog.title} loading="lazy" decoding="async" />
                </div>

                <div className="blog-post-content">
                    <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                </div>

                {/* CTA Section */}
                <div className="blog-cta-section">
                    <div className="blog-cta-content">
                        <h2>Ready to Start Your Business Journey?</h2>
                        <p>Talk to the NXTSTAR team about your business setup in the UAE.</p>
                        <Button to="/contact" type="primary">Get in Touch with NXTSTAR</Button>
                    </div>
                </div>

                <div className="blog-post-navigation">
                    <Button to="/blogs" type="outline">← Back to Blogs</Button>
                </div>
            </div>
        </PageLayout>
    );
};

export default BlogPostPage;
