import React, { Component} from 'react';
import { Link } from 'react-router-dom';

class Post extends Component {
  render() {
    const { post } = this.props

    const onUpvote = () => {
      console.log('handleUpvote')
    }

    const onDownvote = () => {
      console.log('handleDownvote')
    }

    return (
      <div className="post mb-3">
        <div className="card">
          <div className="card-body">
            <span className="badge badge-light">c/{post.category}</span>
            <h4 className="card-title">
              <Link key={post.id} to={`/c/${post.category}/p/${post.id}`}>
                {post.title}
              </Link>
            </h4>
            <p className="card-text mb-0">{post.body}</p>
            <p className="card-text">
              <small className="text-muted">Posted on {post.timestamp} by {post.author}</small>
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">{post.commentCount} Comments, {post.voteScore} Votes</small>
            <div className="post__votes">
              <button className="btn btn-sm btn-link" type="button" onClick={onUpvote}>upvote</button>
              /
              <button className="btn btn-sm btn-link" type="button" onClick={onDownvote}>downvote</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Post
