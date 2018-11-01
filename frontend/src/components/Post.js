import React, { Component} from 'react'

class Post extends Component {
  render() {
    const { post } = this.props

    return (
      <div className="post">
        <div className="media text-muted pt-3">
          <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <strong className="d-block text-gray-dark">{post.author}</strong>
            {post.title}
          </p>
        </div>
      </div>
    )
  }
}

export default Post
