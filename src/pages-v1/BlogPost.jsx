import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { PortableText } from '@portabletext/react';
import { client, urlFor } from '../lib/sanity';
import { mockPosts } from '../data/mockPosts';
import './Blog.css';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const query = `*[_type == "post" && slug.current == $slug][0] {
      title,
      mainImage,
      publishedAt,
      author->{name, image},
      body
    }`;

    if (client.config().projectId === 'your-project-id') {
      const mock = mockPosts.find(p => p.slug.current === slug);
      setPost(mock);
      setLoading(false);
      return;
    }

    client.fetch(query, { slug })
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch(console.error);
  }, [slug]);

  const components = {
    types: {
      image: ({ value }) => (
        <figure className="my-10">
          <img
            src={urlFor(value).width(1200).url()}
            alt={value.alt || 'Post Image'}
            className="rounded-lg shadow-xl w-full"
          />
          {value.caption && <figcaption className="text-center text-sm text-gray-500 mt-2">{value.caption}</figcaption>}
        </figure>
      ),
    },
    block: {
      h2: ({ children }) => <h2 className="text-3xl font-bold mt-12 mb-6">{children}</h2>,
      h3: ({ children }) => <h3 className="text-2xl font-bold mt-8 mb-4">{children}</h3>,
      blockquote: ({ children }) => <blockquote className="border-l-4 border-red-600 pl-4 py-2 my-8 italic text-gray-700 bg-gray-50">{children}</blockquote>,
    },
  };

  if (loading) return <div className="loading-state"><div className="loader"></div></div>;

  if (!post) return <div className="no-posts"><p>Technical document not found.</p><Link to="/blog">Back to Listing</Link></div>;

  return (
    <div className="post-page">
      <Helmet>
        <title>{post.title} | Domain Powers Technical Blog</title>
      </Helmet>

      <section className="post-header">
        <div className="container" style={{ maxWidth: '900px' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="post-meta"
          >
            <span className="blog-author">By {post.author?.name}</span>
            <span style={{ color: '#888', marginLeft: '15px' }}>
              {new Date(post.publishedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
          </motion.div>
          <motion.div 
            className="post-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h1>{post.title}</h1>
          </motion.div>
        </div>
      </section>

      {post.mainImage && (
        <section className="post-main-img">
          <div className="container" style={{ maxWidth: '1000px' }}>
             <motion.img 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              src={urlFor(post.mainImage).width(1600).url()} 
              alt={post.title} 
              style={{ width: '100%', borderRadius: '4px', marginTop: '40px', boxShadow: '0 40px 100px rgba(0,0,0,0.1)' }}
             />
          </div>
        </section>
      )}

      <section className="post-body-container">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="post-content">
            <PortableText value={post.body} components={components} />
          </div>
          
          <div className="post-footer" style={{ marginTop: '80px', borderTop: '1px solid #eee', paddingTop: '40px' }}>
            <Link to="/blog" className="read-more-link"><span>←</span> Back to Technical Feed</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
