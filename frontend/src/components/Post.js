import React, { Component} from 'react';
import { Link } from 'react-router-dom';

class Post extends Component {
  render() {
    const { post } = this.props

    return (
      <div className="post mb-3">
        <div className="card">
          <div className="card-body">
            <span className="badge badge-light mb-2">c/{post.category}</span>
            <h4 className="card-title">
              <Link key={post.id} to={`/c/${post.category}/p/${post.id}`}>
                {post.title}
              </Link>
            </h4>
            <p className="card-text">{post.body}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Posted on {post.timestamp} by {post.author}</small>
          </div>
        </div>
      </div>
    )
  }
}

export default Post
