import React from 'react';
import { Link } from 'react-router-dom';

function Blog() {
  return (
    <div className="About">
      <h1>About page</h1>
      <Link to="/">Go to Home page</Link>
    </div>
  );
}

export default Blog;
