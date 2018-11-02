import React, { Component} from 'react';
import { connect } from "react-redux";
import { fetchPost, fetchComments } from '../actions';

import Comments from '../components/Comments'

class Single extends Component {

  /**
    * @description Carrega os detalhes do post
    * imediatamente após o carregamento de Single
    */
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postId);
    this.props.fetchComments(this.props.match.params.postId);
  }

  render() {
    const { post, comments } = this.props

    return (
      <div className="post">
        <div className="jumbotron jumbotron-fluid py-4">
          <div className="container-fluid">
            <h1 className="display-5">{post.title}</h1>
            <p className="lead mb-0">c/{post.category}</p>
            <small>Posted on {post.timestamp} by {post.author}, vote {post.voteScore}</small>
          </div>
        </div>
        <div className="container-fluid">
          <p>{post.body}</p>
          <Comments comments={comments} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.posts.post,
    comments: state.comments.comments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPost: (postId) => dispatch(fetchPost(postId)),
    fetchComments: (postId) => dispatch(fetchComments(postId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Single);
