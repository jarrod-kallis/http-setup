import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
  state = {
    posts: [],
    selectedPost: null
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
      const postsWithAuthors = response.data.map(post => ({
        ...post,
        author: 'Max'
      }));

      this.setState({
        posts: postsWithAuthors
      });
    });
  }

  postClickedHandler = id => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => {
        const postWithAuthor = {
          ...response.data,
          author: 'Max'
        };

        this.setState({
          selectedPost: postWithAuthor
        });
      });
  };

  render() {
    return (
      <div>
        <section className="Posts">
          {this.state.posts
            .filter((post, index) => index <= 3)
            .map(post => (
              <Post
                key={post.id}
                title={post.title}
                author={post.author}
                onClick={() => this.postClickedHandler(post.id)}
              />
            ))}
        </section>
        <section>
          <FullPost post={this.state.selectedPost} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
