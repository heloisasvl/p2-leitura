import React, { Component} from 'react'

import Post from './Post'

class Posts extends Component {
  render() {
    const { posts } = this.props

    return (
      <div className="posts">
        <ul className="posts-list">
          {posts.map((post, index) => (
            <li key={post.id}>
              <Post post={post} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Posts
