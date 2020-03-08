import React from 'react';
import { Link } from 'react-router-dom';

const BlogBlurb = post => {
  return (
    <p>
      <Link to={post.slug || '#'}>
        {post.title} <span className="float_right">{post.date}</span>
      </Link>
    </p>
  );
};

export default BlogBlurb;
