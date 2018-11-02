import React, { Component} from 'react';

class Comments extends Component {
  render() {
    const { comments } = this.props

    return (
    	<div className="comments">
    		<h5>{comments.length} Comentario(s)</h5>
        {comments.map((comment, index) => (
          <div className="media" key={comment.id}>
            <div className="media-body">
              <h5 className="mt-0">{comment.author}</h5>
              {comment.body}
            </div>
          </div>
        ))}
    	</div>
    )
  }
}

export default Comments;
