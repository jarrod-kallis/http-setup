import React, { Component } from 'react';

import './NewPost.css';

class NewPost extends Component {
  state = {
    title: '',
    content: '',
    author: 'Max'
  };

  render() {
    return (
      <div className="NewPost">
        <h1>Add a Post</h1>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={this.state.title}
          onChange={event => this.setState({ title: event.target.value })}
        />
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          rows="4"
          value={this.state.content}
          onChange={event => this.setState({ content: event.target.value })}
        />
        <label htmlFor="author">Author</label>
        <select
          id="author"
          value={this.state.author}
          onChange={event => this.setState({ author: event.target.value })}
        >
          <option value="Max">Max</option>
          <option value="Manu">Manu</option>
        </select>
        <button>Add Post</button>
      </div>
    );
  }
}

export default NewPost;
