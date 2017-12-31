import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './FullPost.css';

class FullPost extends Component {
  render() {
    let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
    if (this.props.post) {
      post = (
        <div className="FullPost">
          <h1>{this.props.post.title}</h1>
          <p>{this.props.post.body}</p>
          <div className="Edit">
            <button className="Delete">Delete</button>
          </div>
        </div>
      );
    }
    return post;
  }
}

FullPost.defaultProps = {
  post: null
};

FullPost.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string
  })
};

export default FullPost;
