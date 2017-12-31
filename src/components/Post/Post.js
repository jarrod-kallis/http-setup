import React from 'react';
import PropTypes from 'prop-types';

import './Post.css';

const post = ({ title, author }) => (
  <article className="Post">
    <h1>{title}</h1>
    <div className="Info">
      <div className="Author">{author}</div>
    </div>
  </article>
);

post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default post;
