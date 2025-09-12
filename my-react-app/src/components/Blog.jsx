import { useState } from 'react';
import './Blog.css';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "Current issues I have identified",
      excerpt: "One issue i have noted is the scalability of the blog aspect of...",
      category: "development",
      date: "2025-09-02",
      readTime: "2 min read",
      tags: ["Learning", "Challenges", "Growth"]
    },
  ];

  const categories = [
    { key: 'all', label: 'All Posts' },
    { key: 'Documenting', label: 'Documenting My Journey' },
    { key: 'development', label: 'Development' },
    { key: 'career', label: 'Career' }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <section className="blog" id="blog">
      <div className="blog-container">
        <div className="section-header">
          <h2 className="section-title">Blog</h2>
          <p className="section-subtitle">
            Sharing insights and updates on my journey in software development, my career growth, and the challenges I face.
          </p>
        </div>

        {/* All Posts */}
        <div className="all-posts-section">
          <div className="blog-filters">
            {categories.map((category) => (
              <button
                key={category.key}
                className={`filter-btn ${selectedCategory === category.key ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.key)}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="posts-grid">
            {filteredPosts.map((post, index) => (
              <article 
                key={post.id} 
                className="post-card"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="post-image">
                  <div className="image-placeholder">
                    <span>Article Image</span>
                  </div>
                  <div className="post-category">{categories.find(cat => cat.key === post.category)?.label}</div>
                </div>
                <div className="post-content">
                  <div className="post-meta">
                    <span className="post-date">{formatDate(post.date)}</span>
                    <span className="post-read-time">{post.readTime}</span>
                  </div>
                  <h4>{post.title}</h4>
                  <p>{post.excerpt}</p>
                  <div className="post-tags">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  <a href="#" className="read-more">Read More →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;