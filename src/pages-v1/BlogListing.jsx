import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { client, urlFor } from '../lib/sanity';
import { mockPosts } from '../data/mockPosts';
import './Blog.css';

const BlogListing = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const query = `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      author->{name},
      "excerpt": array::join(string::split(pt::text(body), "")[0..180], "") + "..."
    }`;

    if (client.config().projectId === 'your-project-id') {
      setPosts(mockPosts);
      setLoading(false);
      return;
    }

    client.fetch(query)
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="blog-listing">
      <Helmet>
        <title>Engineering Blog & Case Studies | Domain Powers</title>
        <meta name="description" content="Technical insights, power quality case studies, and industrial engineering updates from the experts at Domain Powers." />
      </Helmet>

      <section className="page-hero blog-hero">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Engineering Insights
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Technical case studies and power management expertise from the field.
          </motion.p>
        </div>
      </section>

      <section className="blog-grid-section">
        <div className="container">
          {loading ? (
            <div className="loading-state">
              <div className="loader"></div>
              <p>Fetching technical documentation...</p>
            </div>
          ) : (
            <div className="blog-posts-grid">
              {posts.map((post, index) => (
                <motion.article 
                  key={post._id}
                  className="blog-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={`/blog/${post.slug.current}`} className="blog-img-box">
                    {post.mainImage && (
                      <img src={urlFor(post.mainImage).width(800).url()} alt={post.title} />
                    )}
                    <div className="blog-date">
                      {new Date(post.publishedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}
                    </div>
                  </Link>
                  <div className="blog-info">
                    <span className="blog-author">By {post.author?.name || 'Technical Team'}</span>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <Link to={`/blog/${post.slug.current}`} className="read-more-link">
                      View Full Case Study <span>→</span>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
          
          {!loading && posts.length === 0 && (
             <div className="no-posts">
               <p>Our engineers are currently documenting new case studies. Please check back soon.</p>
             </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogListing;
