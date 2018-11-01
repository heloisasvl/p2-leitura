import React, { Component } from 'react';

import Post from './Post'

class PostList extends Component {
  render() {
    const { posts } = this.props

    return (
      <ul className="postList">
        {posts.map((post, index) => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
    );
  }
}

export default PostList;
