import React, { Component } from 'react';

import Post from './Post'

class Posts extends Component {
  render() {
    const { posts } = this.props

    return (
      <ul className="posts">
        {posts.map((post, index) => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
    );
  }
}

export default Posts;
