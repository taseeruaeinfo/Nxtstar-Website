import PageLayout from '../components/layout/PageLayout';
import article from '../data/indiaContractResource';
import '../styles/pages/BlogPostPage.css';

export default function IndiaContractResource() {
    return (
        <PageLayout title={article.title} description={article.excerpt} ogType="article">
            <article className="blog-post-page">
                <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: article.content }} />
            </article>
        </PageLayout>
    );
}
