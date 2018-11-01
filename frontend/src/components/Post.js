import React, { Component} from 'react'

class Post extends Component {
  render() {
    const { post } = this.props

    return (
      <div className="post">
        <div className="post-title">{post.title}</div>
        <div className="post-authors">{post.authors ? post.authors.join(', '): ''}</div>
      </div>
    )
  }
}

export default Post
