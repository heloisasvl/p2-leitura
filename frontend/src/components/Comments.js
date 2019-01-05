import React, { Component} from 'react';

class Comments extends Component {
  render() {
    const { comments } = this.props

    return (
    	<div className="comments">
    		<h5>{comments.length} Comentario(s)</h5>
        {comments.map((comment, index) => (
          <div className="media py-2" key={comment.id}>
            <div className="media-body">
              <h6>{comment.author} <small><i>Posted on {comment.timestamp}, vote {comment.voteScore}</i></small></h6>
              {comment.body}
            </div>
          </div>
        ))}
    	</div>
    )
  }
}

export default Comments;
