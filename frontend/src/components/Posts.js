import React, { Component} from 'react';

import Post from './Post';

class Posts extends Component {
  render() {
    const { posts } = this.props

    return (
      <div className="posts">
        {posts.map((post, index) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    )
  }
}

export default Posts
