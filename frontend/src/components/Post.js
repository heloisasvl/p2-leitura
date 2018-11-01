import React, { Component} from 'react'

class Post extends Component {
  render() {
    const { post } = this.props

    return (
      <div className="post">
        <div className="post-title">Title: {post.title}</div>
        <div className="post-author">Author: {post.author}</div>
      </div>
    )
  }
}

export default Post
